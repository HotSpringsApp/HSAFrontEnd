import { useState } from "react";
import AboutUs from "./aboutUs";

const RightMenu = () => {
  const [aboutModalOpen, setAboutModalState] = useState(false);

  const handleAboutBtn = () => {
    setAboutModalState(!aboutModalOpen);
  }

  const aboutModalClosed = () => {
    setAboutModalState(false);
  };

  return (
    <>
      <div className="flex">
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleAboutBtn}>About Us</button>
        </div>
      </div>
      <div>
        {aboutModalOpen && (
          <AboutUs 
            modalState={aboutModalOpen}
            handleClosing={aboutModalClosed}
          />
        )}
      </div>
    </>
  )
}

export default RightMenu;
