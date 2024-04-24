import FeeStructure from "@/Components/FeeStructure";
import ImageWithOverlay from "@/Components/ImageWithOverlay";


export default function AdmissionPage() {

    return (
      <>
        <ImageWithOverlay imageUrl={'/Fee.jpg'} title={"FEES"}/>
        <FeeStructure/>
      </>
    );
  }
  