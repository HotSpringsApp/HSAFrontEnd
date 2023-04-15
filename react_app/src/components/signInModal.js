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
 
const SignInModal = ({ signInModalState, signInModalClosed }) => {
  // SignIn modal state and closing handler
  const [signInModalOpen, setSignInModalState] = useState(signInModalState);

  const handleSignInModalClose = () => {
    setSignInModalState(!signInModalOpen);
    signInModalClosed();
  };

  return (
    <>
    
      <React.Fragment>
        <Dialog
          size="xs"
          open={signInModalOpen}
          handler={handleSignInModalClose}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Sign In
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" 
                      // onClick={handleSignInModalClose}     // ~~~~~~~~~TBD~~~~~~~~~ //
                      fullWidth>
                Sign In
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
    </>
  );
}

export default SignInModal;
