import { useState } from "react";
import SignInModal from "./signInModal";

const LeftMenu = () => {
  const [modalViewState, setModalViewState] = useState(false);

  const handleSignInBtn = () => {
    setModalViewState(!modalViewState);
  }

  const setModalClosed = () => {
    setModalViewState(false);
  };

  return (
    <>
      <div className="flex">
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleSignInBtn}>Sign In</button>
        </div>
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2">Sign Up</button>
        </div>
      </div>
      <div>
        {modalViewState && (
          <SignInModal 
            modalViewState={modalViewState}
            setModalClosed={setModalClosed}
          />
        )}
      </div>
    </>
  )
}

export default LeftMenu;
