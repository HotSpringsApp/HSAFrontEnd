import React from "react";
import { useState } from "react";
import axios from "axios";

// useContext hook
// import { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import UserContext from "../context/UserContext";

import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
 
const LogInModal = ({ logInModalState, logInModalClosed, onSuccess }) => {
  // const navigate = useNavigate();

  // logIn modal state and closing handler
  const [logInModalOpen, setLogInModalState] = useState(logInModalState);

  const handleLogInModalClose = () => {
    setLogInModalState(!logInModalOpen);
    logInModalClosed();
    // navigate('/');
  };

  // logIn logic
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  // const setUserData = useContext(UserContext);
  const [userData, setUserData] = useState();

  // reset UI after successfully login
  const setUserLogInUI = (loggedInUser) => {
    onSuccess(loggedInUser);
    logInModalClosed();
  }

  const submit = async (event) => {
    try {
      const loginUser = { email, password };

      // making request to our backend to login the user in
      const loginRes = await axios.post(
        "http://localhost:3001/users/login",
        loginUser
      );

      // setting login response data's token and user data
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);
      // console.log(userData);   // undefined... ?
      
      // closes modal and displays log out btn and user name
      setUserLogInUI(loginRes.data.user.firstName);

    } catch (err) {
      err.response.data.msg && setError(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          size="xs"
          open={logInModalOpen}
          handler={handleLogInModalClose}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Log In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" onChange={(event) => setEmail(event.target.value)}/>
              <Input label="Password" type="password" size="lg" onChange={(event) => setPassword(event.target.value)}/>
              <div>
                {error && (
                  <div className="text-center text-red-500 border border-red-500 rounded-lg p-2">
                    {error}
                  </div>
                )}
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" 
                      onClick={submit}
                      fullWidth>
                Log In
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default LogInModal;
