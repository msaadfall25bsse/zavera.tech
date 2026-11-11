'use client';

import dynamic from 'next/dynamic';

const Waves = dynamic(() => import('@/components/ui/Waves'), {
  ssr: false,
});

export default function WavesBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-black"
      aria-hidden="true"
    >
      <Waves
        lineColor="#f07825"
        spacing={5}
        amplitude={24}
        twist={0.65}
        speed={2.15}
        mouseRadius={60}
        mouseStrength={0.25}
        accentColor="#f07825"
        backgroundColor="#000000"
        scale={0.8}
        variation={2}
        bounce={0.2}
        returnDuration={1.7}
        fade={0.1}
        opacity={0.85}
        lightMode={false}
      />
    </div>
  );
}
