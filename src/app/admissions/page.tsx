import React from 'react';
// import FeeStructure from "@/Components/FeeStructure";
import ImageWithOverlay from "@/Components/ImageWithOverlay";
import Articles from "@/Components/Articles";


export default function AdmissionPage() {

    return (
      <>
        <ImageWithOverlay imageUrl={'/Fee.jpg'} title={"FEES"}/>
        {/* <FeeStructure/> */}
        <Articles />
      </>
    );
  }
  