import React from 'react';
import FeatureSection from './FeatureSection';
import { WHAT_WE_DO } from '@site/src/data/sectionData';

export default function WhatWeDoSection() {
    return (
        <FeatureSection
            id="what-we-do"
            tagline="What We Do"
            title="A Modern Digital Lab"
            items={WHAT_WE_DO}
            columns={3}
        />
    );
}
