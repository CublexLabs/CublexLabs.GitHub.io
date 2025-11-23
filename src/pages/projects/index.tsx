import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FeaturedProject from '@site/src/components/Projects/FeaturedProject';
import ProjectCard from '@site/src/components/Projects/ProjectCard';

const FILTERS = ['All', 'Game Dev', 'Web Tools', 'Plugins', 'Experiments'];

const FEATURED_PROJECT = {
    title: 'Cublex Engine',
    description: 'A next-generation voxel engine built for high-performance gaming and massive multiplayer worlds. Featuring real-time ray tracing support and a modular plugin architecture.',
    category: 'Game Dev',
    version: 'v2.0.0-alpha',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070', // Cyberpunk city placeholder
    link: '#',
};

const PROJECTS = [
    {
        title: 'Nebula UI',
        description: 'A React component library designed for building futuristic, data-heavy interfaces.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        status: 'Live' as const,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070', // Data viz placeholder
    },
    {
        title: 'Void Walker',
        description: 'An experimental roguelike game where you traverse through glitched dimensions.',
        tags: ['Unity', 'C#', 'ProcGen'],
        status: 'Beta' as const,
        image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1974', // Glitch art placeholder
    },
    {
        title: 'Synapse',
        description: 'AI-powered code analysis tool that predicts bugs before you write them.',
        tags: ['Python', 'TensorFlow', 'VS Code'],
        status: 'Alpha' as const,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965', // AI network placeholder
    },
    {
        title: 'Chronos',
        description: 'Distributed job scheduler for microservices architecture.',
        tags: ['Go', 'gRPC', 'Redis'],
        status: 'Live' as const,
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070', // Server rack placeholder
    },
    {
        title: 'Aether',
        description: 'Decentralized storage solution for game assets.',
        tags: ['Rust', 'WebAssembly', 'IPFS'],
        status: 'Beta' as const,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072', // Space network placeholder
    },
];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = PROJECTS.filter(project => {
        const matchesFilter = activeFilter === 'All' || project.tags.some(tag => tag.includes(activeFilter)); // Simple tag matching for demo
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <Layout title="Projects" description="Cublex Labs Digital Laboratory">
            <main>
                {/* Hero Section */}
                <section className="lab-hero">
                    <div className="container">
                        <div className="row">
                            <div className="col col--7">
                                <span className="lab-path">~/projects</span>
                                <h1 className="lab-title">The Laboratory</h1>
                                <p className="lab-subtitle">
                                    A curated collection of experiments, production services, and indie titles built by Cublex.
                                </p>

                                {/* Filter Rail moved inside Hero */}
                                <div className="lab-filter-rail">
                                    {FILTERS.map((filter) => (
                                        <button
                                            key={filter}
                                            className={`lab-filter-pill ${activeFilter === filter ? 'active' : 'inactive'}`}
                                            onClick={() => setActiveFilter(filter)}
                                        >
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="col col--5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                                <div className="lab-search-container">
                                    <span className="lab-search-icon">🔍</span>
                                    <input
                                        type="text"
                                        className="lab-search-input"
                                        placeholder="Search projects..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="container">
                    {/* Featured Project */}
                    <FeaturedProject {...FEATURED_PROJECT} />

                    {/* Project Grid */}
                    <div className="project-grid" style={{ marginBottom: '4rem' }}>
                        {filteredProjects.map((project, idx) => (
                            <ProjectCard key={idx} {...project} />
                        ))}
                    </div>
                </div>
            </main>
        </Layout>
    );
}
