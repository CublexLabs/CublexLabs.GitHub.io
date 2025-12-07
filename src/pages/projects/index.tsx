import React, { useState } from 'react';
import Layout from '@theme/Layout';
import FeaturedProject from '@site/src/components/Projects/FeaturedProject';
import ProjectCard from '@site/src/components/Projects/ProjectCard';
import { PROJECTS, FEATURED_PROJECT } from '@site/src/data/projects';

const FILTERS = ['All', 'Apps', 'Plugins', 'Games', 'Utilities'];

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
