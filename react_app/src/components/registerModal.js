import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  // SignUp modal state and closing handler
  const [registerModalOpen, setRegisterModalState] = useState(registerModalState);

  const handleSignUpModalClose = () => {
    setRegisterModalState(!registerModalOpen);
    registerModalClosed();
    navigate('/');
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
              <Input label="First name" size="lg" />
              <Input label="Last name" size="lg" />
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              <Input label="Repeat password" size="lg" />
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAKE THE FOLLOWING tag 'hidden' and display only when error occur */}
              <div className="text-center text-red-500 border border-red-500 rounded-lg p-2">
                Any error msg here (missing info, not matching passwords...)
              </div>

            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" 
                // onClick={handleRegisterModalClose}         // ~~~~~~~~~TBD~~~~~~~~~ //
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
