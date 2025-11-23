import React from 'react';
import UVLightLayout from '@site/src/components/UVLightLayout';
import Link from '@docusaurus/Link';

export default function LuminalCall() {
    const ghostContent = (
        <div style={{ padding: '4rem', fontFamily: 'monospace', color: '#00ff00', opacity: 0.8 }}>
            <h1>SYSTEM_FAILURE: CONTAINMENT_BREACH</h1>
            <p>ERROR_CODE: 0xDEADBEEF</p>
            <br />
            <p>{`> The light is not safe.`}</p>
            <p>{`> It burns.`}</p>
            <p>{`> It reveals what should remain hidden.`}</p>
            <br />
            <pre>
                {`void Update() {
  if (player.lookAt(light)) {
    sanity -= Time.deltaTime * 50;
    if (sanity <= 0) {
      RevealTruth();
    }
  }
}`}
            </pre>
            <br />
            <p>DO NOT TRUST THE SHADOWS.</p>
            <p>THEY ARE WATCHING.</p>
            <div style={{ marginTop: '20vh', fontSize: '5rem', opacity: 0.1 }}>
                👁️
            </div>
        </div>
    );

    return (
        <UVLightLayout
            title="Luminal Call"
            description="A psychological horror game."
            ghostContent={ghostContent}
        >
            <div className="container" style={{ padding: '4rem 0', color: 'var(--ifm-font-color-base)' }}>
                <div className="row">
                    <div className="col col--12">
                        <Link to="/projects" style={{ display: 'inline-block', marginBottom: '2rem' }}>← Back to Laboratory</Link>
                        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>Luminal Call</h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--ifm-color-emphasis-700)' }}>
                            A psychological horror game where light is your only weapon against the encroaching darkness.
                        </p>
                    </div>
                </div>

                <div className="row" style={{ marginTop: '4rem' }}>
                    <div className="col col--8">
                        <img
                            src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=1974"
                            alt="Luminal Call Gameplay"
                            style={{ borderRadius: '1rem', width: '100%', marginBottom: '2rem' }}
                        />
                        <h2>About the Game</h2>
                        <p>
                            Luminal Call explores the concept of photophobia in a literal sense. You play as a researcher trapped in a facility where the shadows have come alive.
                            Your flashlight is your only defense, but it has a limited battery.
                        </p>
                        <p>
                            Manage your resources, solve puzzles, and uncover the dark history of the facility before the lights go out for good.
                        </p>
                    </div>
                    <div className="col col--4">
                        <div style={{ background: 'var(--cublex-bg-card)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--cublex-border)' }}>
                            <h3>Project Details</h3>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Status:</strong> <span className="badge badge--warning">Beta</span></li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Platform:</strong> PC (Windows/Mac)</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Engine:</strong> Unity 2022 LTS</li>
                                <li style={{ marginBottom: '0.5rem' }}><strong>Release:</strong> Q4 2025</li>
                            </ul>
                            <button className="button button--primary button--block">Download Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </UVLightLayout>
    );
}
