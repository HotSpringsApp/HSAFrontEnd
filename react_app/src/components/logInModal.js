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
 
const LogInModal = ({ logInModalState, logInModalClosed }) => {
  const navigate = useNavigate();

  // SignIn modal state and closing handler
  const [logInModalOpen, setLogInModalState] = useState(logInModalState);

  const handleLogInModalClose = () => {
    setLogInModalState(!logInModalOpen);
    logInModalClosed();
    navigate('/');
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
              <Input label="Email" size="lg" />
              <Input label="Password" size="lg" />
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ MAKE THE FOLLOWING tag 'hidden' and display only when error occur */}
              <div className="text-center text-red-500 border border-red-500 rounded-lg p-2">
                invalid email or password msg here (TBD)
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" 
                      // onClick={handleLogInModalClose}     // ~~~~~~~~~TBD~~~~~~~~~ //
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
