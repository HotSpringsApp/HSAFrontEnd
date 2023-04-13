import React from "react";
import { useState } from "react";
import SignInModal from "./signInModal";

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

  // SignIn modal state and opening handler --> See comments on lines 65 & 66 and code that follow those lines
  const [signInModalOpen, setSignInModalOpen] = useState(false);

  const handleSignInModalOpen = () => {
    handleSignUpModalClose();
    setSignInModalOpen(!signInModalOpen);
  }

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

              {/* THE FOLLOWING COMPONENT is a link to open the sign ip modal if the user already have an account 
                  TO BE IMPLEMENTED (so far, current modal closes but sign in doesn't open)
              */}

              <Typography variant="small" className="mt-6 flex justify-center">
                Already have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                  onClick={handleSignInModalOpen}         // ~~~~~~~~~WIP~~~~~~~~~ //
                  >
                  Sign in
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </Dialog>
      </React.Fragment>
      <div>
        {signInModalOpen && (
          <SignInModal 
            signInModalState={signInModalOpen}
            signInModalClosed={signUpModalClosed}
          />
        )}
      </div>
    </>
  );
}

export default SignUpModal;
