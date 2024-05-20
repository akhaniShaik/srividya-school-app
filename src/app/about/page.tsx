import React from 'react';
import ImageWithOverlay from "@/Components/ImageWithOverlay";
// import SchoolPage from "@/Components/SchoolPage";
import WhyChooseUs from "@/Components/ChooseUs";
import TeamSection from "@/Components/TeamSection";


export default function Aboutpage() {
    return (
      <>
        <ImageWithOverlay imageUrl={'/schoolBuilding-02.jpg'} title="About School"/>
        <WhyChooseUs/>
        <TeamSection/>
      </>
    );
  }
  