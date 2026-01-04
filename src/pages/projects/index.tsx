import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FeaturedProject from '@site/src/components/Projects/FeaturedProject';
import ProjectCard from '@site/src/components/Projects/ProjectCard';
import { PROJECTS, FEATURED_PROJECT } from '@site/src/data/projects';

const FILTERS = ['All', 'Web', 'Minecraft']; // 'Games', 'Utilities', 'Mobile'

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredProjects = PROJECTS.filter(project => {
        const matchesFilter = activeFilter === 'All' ||
            (project.category && project.category === activeFilter) ||
            project.tags.some(tag => tag.includes(activeFilter));
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <Layout title="Projects" description="Kukso Studios Digital Laboratory">
            <main>
                {/* Hero Section */}
                <section className="lab-hero">
                    <div className="container">
                        {/* Header Row: Title (Left) + Featured Project (Right) */}
                        <div className="row" style={{ alignItems: 'center', marginBottom: '2rem' }}>
                            <div className="col col--6">
                                <span className="lab-path">~/projects</span>
                                <h1 className="lab-title">The Laboratory</h1>
                                <p className="lab-subtitle">
                                    A curated collection of experiments, production services, and indie titles built by Kukso Studios.
                                </p>
                            </div>
                            <div className="col col--6">
                                <div className="featured-header-wrapper">
                                    <FeaturedProject {...FEATURED_PROJECT} />
                                </div>
                            </div>
                        </div>

                        {/* Controls Row: Filters (Left) + Search (Right) */}
                        <div className="row" style={{ alignItems: 'center' }}>
                            <div className="col col--8">
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
                            <div className="col col--4" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <div className="lab-search-container" style={{ width: '100%' }}>
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
