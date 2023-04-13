import { Fragment } from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";
import { useState } from "react";

const SpringModal = ({ spring, modalState }) => {
  const [displayModal, setDisplayModal] = useState(modalState);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <Fragment>
      <Dialog open={displayModal} handler={handleClick}>
        <DialogHeader>{spring.name}</DialogHeader>
        <DialogBody>
          {spring.description}
        </DialogBody>
      </Dialog>
    </Fragment>
  )
}

export default SpringModal;
