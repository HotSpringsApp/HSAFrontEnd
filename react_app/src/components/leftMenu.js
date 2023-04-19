import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LogInModal from "./logInModal";
import RegisterModal from "./registerModal";

const LeftMenu = () => {
  const navigate = useNavigate();

  // LogIn Btn state and handler
  const [logInModalOpen, setLogInModalState] = useState(false);
  
  const handleLogInBtn = () => {
    navigate('/login');
    setLogInModalState(!logInModalOpen);
  }
  
  const logInModalClosed = () => {
    setLogInModalState(false);
  };

  // Register Btn state and handler
  const [registerModalOpen, setRegisterModalState] = useState(false);
  
  const handleRegisterBtn = () => {
    navigate('/register');
    setRegisterModalState(!registerModalOpen);
  }

  const registerModalClosed = () => {
    setRegisterModalState(false);
  };

  return (
    <>
      <div className="flex">
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleLogInBtn}>Log In</button>
        </div>
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={handleRegisterBtn}>Register</button>
        </div>
      </div>
      <div>
        {logInModalOpen && (
          <LogInModal 
            logInModalState={logInModalOpen}
            logInModalClosed={logInModalClosed}
          />
        )}
      </div>
      <div>
        {registerModalOpen && (
          <RegisterModal 
            registerModalState={registerModalOpen}
            registerModalClosed={registerModalClosed}
          />
        )}
      </div>
    </>
  )
}

export default LeftMenu;
