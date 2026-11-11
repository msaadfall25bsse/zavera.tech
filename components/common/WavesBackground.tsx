'use client';

import dynamic from 'next/dynamic';

const Waves = dynamic(() => import('@/components/ui/Waves'), {
  ssr: false,
});

export default function WavesBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden"
      aria-hidden="true"
    >
      <Waves
        lineColor="#f07825"
        accentColor="#ff8c42"
        backgroundColor="transparent"
        spacing={6}
        amplitude={20}
        twist={0.55}
        speed={1.6}
        mouseRadius={70}
        mouseStrength={0.22}
        scale={0.8}
        variation={2}
        bounce={0.2}
        returnDuration={1.7}
        fade={0.12}
        opacity={0.35}
        lightMode={true}
      />
    </div>
  );
}
