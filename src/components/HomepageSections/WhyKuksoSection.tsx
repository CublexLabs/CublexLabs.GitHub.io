import React from 'react';
import FeatureSection from './FeatureSection';
import { WHY_KUKSO } from '@site/src/data/sectionData';

export default function WhyKuksoSection() {
    return (
        <FeatureSection
            id="why-kukso"
            tagline="Why Kukso?"
            title="Unique Hybrid Approach"
            items={WHY_KUKSO}
            columns={2}
        />
    );
}
