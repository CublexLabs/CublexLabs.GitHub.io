import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  HeroSection,
  WhatWeDoSection,
  FocusAreasSection,
  WhyCublexSection,
} from '@site/src/components/HomepageSections';

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
        <WhyCublexSection />
      </main>
    </Layout>
  );
}
