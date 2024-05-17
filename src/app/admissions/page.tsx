import React from 'react';
// import FeeStructure from "@/Components/FeeStructure";
import ImageWithOverlay from "@/Components/ImageWithOverlay";
import Admissions from "@/Components/admissions";


export default function AdmissionPage() {

    return (
      <>
        <ImageWithOverlay imageUrl={'/Fee.jpg'} title={"FEES"}/>
        {/* <FeeStructure/> */}
        <Admissions />
      </>
    );
  }
  