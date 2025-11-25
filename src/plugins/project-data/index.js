const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

module.exports = async function projectDataPlugin(context, options) {
  return {
    name: 'project-data-plugin',

    async loadContent() {
      const projectsDir = path.join(context.siteDir, 'projects');
      if (!fs.existsSync(projectsDir)) {
        return [];
      }

      const files = fs.readdirSync(projectsDir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'));
      
      const projects = files.map(file => {
        const filePath = path.join(projectsDir, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data } = matter(fileContent);
        
        // Add slug based on filename if not present, or use a specific field
        const slug = file.replace(/\.mdx?$/, '');
        
        return {
          ...data,
          slug,
          // If link is not provided, we might want to default to the internal doc link
          // but for now let's just keep the data as is.
          // We can construct the internal link in the UI if needed.
        };
      });

      return projects;
    },

    async contentLoaded({ content, actions }) {
      const { setGlobalData } = actions;
      setGlobalData(content);
    },

    getPathsToWatch() {
      const projectsDir = path.join(context.siteDir, 'projects');
      return [
        path.join(projectsDir, '**/*.{md,mdx}'),
      ];
    },
  };
};
