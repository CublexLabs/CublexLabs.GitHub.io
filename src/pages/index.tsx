import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HeroSection from '@site/src/components/HomepageSections/HeroSection';
import WhatWeDoSection from '@site/src/components/HomepageSections/WhatWeDoSection';
import FocusAreasSection from '@site/src/components/HomepageSections/FocusAreasSection';
import WhyKuksoSection from '@site/src/components/HomepageSections/WhyKuksoSection';
import ContactSection from '@site/src/components/HomepageSections/ContactSection';
import FlagshipPromo from '@site/src/components/FlagshipPromo';

import AmbientBackground from '@site/src/components/AmbientBackground';
import { FEATURED_PROJECT } from '@site/src/data/projects';

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
        <ContactSection />
        <FlagshipPromo project={FEATURED_PROJECT} />
      </main>
    </Layout>
  );
}
