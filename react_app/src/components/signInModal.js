import React from "react";
import { useState } from "react";
import SignUpModal from "./signUpModal";

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

  // SignUp modal state and opening handler --> See comments on lines 64 & 65 and code that follow those lines
  const [signUpModalOpen, setSignUpModalState] = useState(false);

  const handleSignUpModalOpen = () => {
    handleSignInModalClose();
    setSignUpModalState(!signUpModalOpen);
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

              {/* THE FOLLOWING COMPONENT is a link to open the sign up modal if the user needs to create an account 
                  TO BE IMPLEMENTED  (so far, current modal closes but sign up doesn't open)
              */}

              {/* <Typography variant="small" className="mt-6 flex justify-center">
                Don&apos;t have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={handleSignUpModalOpen}         // ~~~~~~~~~WIP~~~~~~~~~ //
                >
                  Sign up
                </Typography>
              </Typography> */}
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
      <div>
        {signUpModalOpen && (
          <SignUpModal 
            signUpModalState={signUpModalOpen}
            signUpModalClosed={signInModalClosed}
          />
        )}
      </div>
    </>
  );
}

export default SignInModal;
