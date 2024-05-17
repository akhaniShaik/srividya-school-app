import React from 'react';
import ImageWithOverlay from "@/Components/ImageWithOverlay";
import ImageGallery from "@/Components/ImageGallery";

export default function BeyondPage() {
    return (
      <>
        <ImageWithOverlay imageUrl={'/schoolBuilding-02.jpg'} title="Beyond Academics"/>
        <ImageGallery />
      </>
    );
  }
  