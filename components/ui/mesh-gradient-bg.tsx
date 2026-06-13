'use client';

import { MeshGradient } from '@paper-design/shaders-react';

export default function MeshGradientBg() {
  return (
    <MeshGradient
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      colors={['#000000', '#1a1a1a', '#555555', '#ffffff']}
      speed={0.5}
    />
  );
}
