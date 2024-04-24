import ImageWithOverlay from "@/Components/ImageWithOverlay";
import SchoolPage from "@/Components/SchoolPage";


export default function Aboutpage() {
    return (
      <>
        <ImageWithOverlay imageUrl={'/schoolBuilding-02.jpg'} title="About School"/>
        <SchoolPage/>
      </>
    );
  }
  