import React from "react";
import { useState } from "react";

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
 
const SignUpModal = ({ signUpModalState, signUpModalClosed }) => {
  // SignUp modal state and closing handler
  const [signUpModalOpen, setSignUpModalState] = useState(signUpModalState);

  const handleSignUpModalClose = () => {
    setSignUpModalState(!signUpModalOpen);
    signUpModalClosed();
  };

  return (
    <>
      <React.Fragment>
        <Dialog
          size="xs"
          open={signUpModalOpen}
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
                Sign Up
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="First name" size="lg" />
              <Input label="Last name" size="lg" />
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" 
                // onClick={handleSignUpModalClose}         // ~~~~~~~~~TBD~~~~~~~~~ //
                fullWidth>
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default SignUpModal;
