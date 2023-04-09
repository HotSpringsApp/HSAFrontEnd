import { Fragment, useState } from "react";
import { Button, Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

import SingleSpring from "./singleSpring";

const ResultsContainer = ({ data }) => {
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <>
      <h2 className="text-lg font-bold mb-4 text-center">
        {data.length} results found
      </h2>
      {data.map(spring => 
      <div>
        <SingleSpring 
          key={spring._id}
          spring={spring}
        />
        <Fragment>
          <Button onClick={handleClick} variant="gradient">
            More info
          </Button>
          <Dialog open={displayModal} handler={handleClick}>
            <DialogHeader>{spring.name}</DialogHeader>
            <DialogBody divider>
              {spring.description}
            </DialogBody>
          </Dialog>
        </Fragment>
      </div>
      )}
    </>
  )
}

export default ResultsContainer;
