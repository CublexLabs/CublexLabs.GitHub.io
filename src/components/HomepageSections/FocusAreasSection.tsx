import React from 'react';
import FeatureSection from './FeatureSection';
import { FOCUS_AREAS } from '@site/src/data/sectionData';

export default function FocusAreasSection() {
    return (
        <FeatureSection
            id="focus"
            tagline="Our Focus"
            title="Building for the Future"
            items={FOCUS_AREAS}
            columns={3}
        />
    );
}
