export interface Project {
    title: string;
    description: string;
    tags: string[];
    status: 'Live' | 'Beta' | 'Alpha';
    image: string;
    link?: string;
    category?: string; // For filtering
}

export interface FeaturedProjectData {
    title: string;
    description: string;
    category: string;
    version: string;
    image: string;
    link: string;
}

export const FEATURED_PROJECT: FeaturedProjectData = {
    title: 'Minecraft Plugins',
    description: 'The best in class Minecraft plugins for a better experience.',
    category: 'Plugins',
    version: 'v2.0.0-alpha',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070',
    link: '/docs/category/minecraft-plugins',
};

export const PROJECTS: Project[] = [
    {
        title: 'CublexCore',
        description: 'The core plugin for CublexLabs Minecraft plugins.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Live',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070', // Server rack placeholder
        category: 'Plugins'
    },
    {
        title: 'Luminal Call',
        description: 'A psychological horror game where light is your only weapon against the encroaching darkness.',
        tags: ['Unity', 'C#', 'Horror'],
        status: 'Beta',
        image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1974', // Dark/Light placeholder
        link: '/projects/luminal-call',
        category: 'Game Dev'
    },
    {
        title: 'Nebula UI',
        description: 'A React component library designed for building futuristic, data-heavy interfaces.',
        tags: ['React', 'TypeScript', 'Tailwind'],
        status: 'Live',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070', // Data viz placeholder
        category: 'Web Tools'
    },
    {
        title: 'Void Walker',
        description: 'An experimental roguelike game where you traverse through glitched dimensions.',
        tags: ['Unity', 'C#', 'ProcGen'],
        status: 'Beta',
        image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1974', // Glitch art placeholder
        category: 'Game Dev'
    },
    {
        title: 'Synapse',
        description: 'AI-powered code analysis tool that predicts bugs before you write them.',
        tags: ['Python', 'TensorFlow', 'VS Code'],
        status: 'Alpha',
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1965', // AI network placeholder
        category: 'Web Tools'
    },
    {
        title: 'Aether',
        description: 'Decentralized storage solution for game assets.',
        tags: ['Rust', 'WebAssembly', 'IPFS'],
        status: 'Beta',
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072', // Space network placeholder
        category: 'Utility'
    },
];
