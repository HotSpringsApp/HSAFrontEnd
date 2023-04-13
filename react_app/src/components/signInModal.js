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
  Checkbox,
} from "@material-tailwind/react";
 
const SignInModal = ({ modalViewState, setModalClosed }) => {

  const [modalStatus, setModalOpen] = useState(modalViewState);

  const handleModalClose = () => {
    setModalOpen(!modalStatus);
    setModalClosed();
  };

  return (
    <React.Fragment>
      <Dialog
        size="xs"
        open={modalStatus}
        handler={handleModalClose}
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
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" 
                    onClick={handleModalClose} 
                    fullWidth>
              Sign In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleModalClose}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}

export default SignInModal;
