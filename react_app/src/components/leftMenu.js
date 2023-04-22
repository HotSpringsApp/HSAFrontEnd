import { useState } from "react";
import LogInModal from "./logInModal";
import RegisterModal from "./registerModal";

// useContext hook
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import UserContext from "../context/UserContext";

const LeftMenu = () => {
  // const navigate = useNavigate();

  // LogIn Btn state and handler
  const [logInModalOpen, setLogInModalState] = useState(false);
  
  const handleLogInBtn = () => {
    // navigate('/login');
    setLogInModalState(!logInModalOpen);
  }
  
  const logInModalClosed = () => {
    setLogInModalState(false);
  };

  // Register Btn state and handler
  const [registerModalOpen, setRegisterModalState] = useState(false);
  
  const handleRegisterBtn = () => {
    // navigate('/register');
    setRegisterModalState(!registerModalOpen);
  }

  const registerModalClosed = () => {
    setRegisterModalState(false);
  };

  // User logged in changes the content of menu
  const [showLogout, setShowLogout] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState('');

  // Log out logic (upon logout setting token and user to undefined and localStorage back to empty string)
  const [ userData, setUserData ] = useState() || {};

  const logout = () => {
    setUserData({
      token: undefined,
      user: undefined,
    });
    localStorage.setItem("auth-token", "");
    setShowLogout(false);
  };

  return (
    <>
      <div className="flex">
        {showLogout ? (
          <div className="flex justify-center items-center">
            <div className="mr-6">
              You are now logged in as {loggedInUser}
            </div>  
            <div className="mr-6">
              <button className="border border-white rounded-md py-1 px-2" onClick={logout}>Log Out</button>
            </div>
          </div>
        ) : (
          <>
            <div className="mr-6">
              <button className="border border-white rounded-md py-1 px-2" 
                      onClick={handleLogInBtn}>
                        Log In
              </button>
            </div>
            <div className="mr-6">
              <button className="border border-white rounded-md py-1 px-2"
                      onClick={handleRegisterBtn}>  
                        Register
              </button>
            </div>
          </>
        )}
      </div>
      <div>
        {logInModalOpen && (
          <LogInModal 
            logInModalState={logInModalOpen}
            logInModalClosed={logInModalClosed}
            onSuccess={(name) => { setLoggedInUser(name); setShowLogout(true); }}
          />
        )}
      </div>
      <div>
        {registerModalOpen && (
          <RegisterModal 
            registerModalState={registerModalOpen}
            registerModalClosed={registerModalClosed}
            onSuccess={(name) => { setLoggedInUser(name); setShowLogout(true); }}
          />
        )}
      </div>
    </>
  )
}

export default LeftMenu;
