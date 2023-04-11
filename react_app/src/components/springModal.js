import { Fragment } from "react";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

const SpringModal = ({ spring, openModal }) => {
  // console.log(spring);
  return (
    <Fragment>
      <Dialog open={openModal}>
        <DialogHeader>{spring.name}</DialogHeader>
        <DialogBody>
          {spring.description}
        </DialogBody>
      </Dialog>
    </Fragment>
  )
}

export default SpringModal;
