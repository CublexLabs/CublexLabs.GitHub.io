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
    version: 'v2.0.0-beta',
    image: 'https://media.istockphoto.com/id/1312381221/tr/foto%C4%9Fraf/3d-%C3%B6zet-k%C3%BCpler-video-oyunu-geometrik-mozaik-dalgalar-deseni-kahverengi-ve-ye%C5%9Fil-%C3%A7im.jpg?s=2048x2048&w=is&k=20&c=qfB6DRg9tTwD00IQLssCR2Qq3hn8_sJXtWjnqzE3JOU=',
    link: '/docs/category/minecraft-plugins',
};

export const PROJECTS: Project[] = [
    {
        title: 'FirstSpawn',
        description: 'Advanced server exploration and player retention platform.',
        tags: ['React', 'TypeScript', 'Next.js', 'C#.NET'],
        status: 'Alpha',
        image: '/content/logo_firstspawn.png',
        category: 'Platforms',
        link: '/docs/category/firstspawn',
    },
    {
        title: 'Discipline vs Dopamine',
        description: 'Habit-tracker mobile app with enhanced AI features.',
        tags: ['ReactNative', 'TypeScript', 'Zustand'],
        status: 'Alpha',
        image: '/content/logo_dd.png',
        category: 'Platforms'
    },
    {
        title: 'KuksoLib',
        description: 'The core plugin for Kukso Studios Minecraft plugins.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: '/content/logo_kuksolib.png',
        category: 'Plugins',
        link: '/docs/category/cublexcore',
    },
    {
        title: 'KuksoWorlds',
        description: 'A lightweight plugin for world moderation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: '/content/logo_kuksoworlds.png',
        category: 'Plugins',
        link: '/docs/category/cubworlds',
    },
    {
        title: 'KuksoDialogs',
        description: 'A plugin for dialog moderation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: '/content/logo_kuksodialogs.png',
        category: 'Plugins',
        link: '/docs/category/cubdialogs',
    },
    {
        title: 'KuksoItems',
        description: 'A plugin for item moderation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: '/content/logo_kuksoitems.png',
        category: 'Plugins',
        link: '/docs/category/cubdialogs',
    },
    {
        title: 'KuksoDungeons',
        description: 'A plugin for procedural dungeon generation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: '/content/logo_kuksodungeons.png',
        category: 'Plugins',
        link: '/docs/category/cubdialogs',
    },
    // {
    //     title: 'Luminal Call',
    //     description: 'A psychological horror game where light is your only weapon against the encroaching darkness.',
    //     tags: ['Unity', 'C#', 'Horror'],
    //     status: 'Beta',
    //     image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1974', // Dark/Light placeholder
    //     link: '/projects/luminal-call',
    //     category: 'Game Dev'
    // },
    // {
    //     title: 'Void Walker',
    //     description: 'An experimental roguelike game where you traverse through glitched dimensions.',
    //     tags: ['Unity', 'C#', 'ProcGen'],
    //     status: 'Beta',
    //     image: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?auto=format&fit=crop&q=80&w=1974', // Glitch art placeholder
    //     category: 'Game Dev'
    // },
];
