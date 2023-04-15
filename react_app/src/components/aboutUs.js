import { Fragment } from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";

const AboutUs = ({ modalState, handleClosing }) => {
  const [displayModal, setDisplayModal] = useState(modalState);

  const handleClick = () => {
    setDisplayModal(!displayModal);
    handleClosing();
  }

  return (
    <Fragment>
      <Dialog open={displayModal} handler={handleClick}>
        <DialogHeader>
          About Us
        </DialogHeader>
        <DialogBody>
          We are blablablabla, and can do blebleble. Give us a job and stop messing.
        </DialogBody>
      </Dialog>
    </Fragment>
  )
}

export default AboutUs;
