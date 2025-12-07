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
        title: 'Routinai',
        description: 'AI assisted habit-tracker app for mobile.',
        tags: ['ReactNative', 'TypeScript', 'Zustand'],
        status: 'Alpha',
        image: 'https://images.unsplash.com/photo-1610641564155-8ea9845579dd?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Apps'
    },
    {
        title: 'CublexCore',
        description: 'The core plugin for CublexLabs Minecraft plugins.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: 'https://images.unsplash.com/photo-1697479670670-d2a299df749c?q=80&w=1145&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Plugins',
        link: '/docs/category/cublexcore',
    },
    {
        title: 'CubWorlds',
        description: 'A lightweight plugin for world moderation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: 'https://media.istockphoto.com/id/482440328/photo/pixel-world.webp?a=1&b=1&s=612x612&w=0&k=20&c=ybQU2HLW2f-sOtEUqt8VPDvuMGf8MScS1zzrvLfClk8=',
        category: 'Plugins',
        link: '/docs/category/cubworlds',
    },
    {
        title: 'CubDialogs',
        description: 'A plugin for dialog moderation.',
        tags: ['Java', 'Spigot', 'Bukkit'],
        status: 'Beta',
        image: 'https://minecraft.wiki/images/thumb/Dialog_list_dialog.png/300px-Dialog_list_dialog.png?31e2b',
        category: 'Plugins',
        link: '/docs/category/cubdialogs',
    },
    {
        title: 'CraftHub',
        description: 'Daily rewards for mini-game players.',
        tags: ['ReactNative', 'TypeScript', 'Zustand'],
        status: 'Alpha',
        image: 'https://images.unsplash.com/photo-1585427448073-f7c6fdec14e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        category: 'Apps'
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
