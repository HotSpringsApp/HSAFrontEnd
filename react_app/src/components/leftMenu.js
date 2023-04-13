import { useState } from "react";
import SignInModal from "./signInModal";
import SignUpModal from "./signUpModal";

const LeftMenu = () => {
  // SignIn Btn state and handler
  const [signInModalOpen, setSignInModalState] = useState(false);
  
  const handleSignInBtn = () => {
    setSignInModalState(!signInModalOpen);
  }
  
  const signInModalClosed = () => {
    setSignInModalState(false);
  };

  // SignUp Btn state and handler
  const [signUpModalOpen, setSignUpModalState] = useState(false);
  
  const handleSignUpBtn = () => {
    setSignUpModalState(!signUpModalOpen);
  }

  const signUpModalClosed = () => {
    setSignUpModalState(false);
  };

  return (
    <>
      <div className="flex">
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleSignInBtn}>Sign In</button>
        </div>
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleSignUpBtn}>Sign Up</button>
        </div>
      </div>
      <div>
        {signInModalOpen && (
          <SignInModal 
            signInModalState={signInModalOpen}
            signInModalClosed={signInModalClosed}
          />
        )}
      </div>
      <div>
        {signUpModalOpen && (
          <SignUpModal 
            signUpModalState={signUpModalOpen}
            signUpModalClosed={signUpModalClosed}
          />
        )}
      </div>
    </>
  )
}

export default LeftMenu;
