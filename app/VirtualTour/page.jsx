'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const ReactPhotoSphereViewer = dynamic(
  () => import('react-photo-sphere-viewer').then(mod => mod.ReactPhotoSphereViewer),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="App">
      <ReactPhotoSphereViewer src="./images/pano.jpg" height="100vh" width="100%" />
    </div>
  );
}
