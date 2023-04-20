import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../context/UserContext";

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
 
const RegisterModal = ({ registerModalState, registerModalClosed }) => {
  const navigate = useNavigate();

  // register modal state and closing handler
  const [registerModalOpen, setRegisterModalState] = useState(registerModalState);

  const handleSignUpModalClose = () => {
    setRegisterModalState(!registerModalOpen);
    registerModalClosed();
    navigate('/');
  };

  // register logic
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCheck, setPasswordCheck] = useState();
  const [error, setError] = useState();
  const setUserData = useContext(UserContext);

  const submit = async (event) => {
    try {
       // creating the new user
      const newUser = { firstName, lastName, email, password, passwordCheck };
      // posting new user to backend
      await axios.post("http://localhost:3001/users/register", newUser);

      // making request to our backend to login the user in
      const loginRes = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      // setting login response data's token and user data
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });
      localStorage.setItem("auth-token", loginRes.data.token);

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
          open={registerModalOpen}
          handler={handleSignUpModalClose}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Register
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="First name" size="lg" onChange={(event) => setFirstName(event.target.value)}/>
              <Input label="Last name" size="lg" onChange={(event) => setLastName(event.target.value)}/>
              <Input label="Email" size="lg" onChange={(event) => setEmail(event.target.value)}/>
              <Input label="Password" size="lg" onChange={(event) => setPassword(event.target.value)}/>
              <Input label="Repeat password" size="lg" onChange={(event) => setPasswordCheck(event.target.value)}/>
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
                Register
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default RegisterModal;
