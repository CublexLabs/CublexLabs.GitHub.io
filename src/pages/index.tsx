import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HomepageSections/HeroSection';
import WhatWeDoSection from '@site/src/components/HomepageSections/WhatWeDoSection';
import FocusAreasSection from '@site/src/components/HomepageSections/FocusAreasSection';
import WhyKuksoSection from '@site/src/components/HomepageSections/WhyKuksoSection';

import AmbientBackground from '@site/src/components/AmbientBackground';

// ${siteConfig.title}
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Tools, Games, and Services for the Next Generation">
      <main>
        <AmbientBackground />
        <HeroSection />
        <WhatWeDoSection />
        <FocusAreasSection />
        <WhyKuksoSection />
      </main>
    </Layout>
  );
}
