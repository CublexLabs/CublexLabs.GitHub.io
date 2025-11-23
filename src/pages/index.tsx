import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {
  HeroSection,
  WhatWeDoSection,
  FocusAreasSection,
  WhyCublexSection,
} from '@site/src/components/HomepageSections';

import BackgroundAnimation from '@site/src/components/BackgroundAnimation';

// ${siteConfig.title}
export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Build. Play. Evolve.`}
      description="Tools, Games, and Services for the Next Generation">
      <main>
        <BackgroundAnimation />
        <HeroSection />
        <WhatWeDoSection />
        <FocusAreasSection />
        <WhyCublexSection />
      </main>
    </Layout>
  );
}
