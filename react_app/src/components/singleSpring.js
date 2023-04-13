import { useState } from "react";
import SpringModal from "./springModal";

const SingleSpring = ({ spring }) => {  
  
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  }

  return (
    <>
      <div onClick={handleClick}>
        <div className="lg:flex">
          <img 
            className="object-cover w-full h-56 rounded-lg lg:w-64" 
            src="https://tinyurl.com/2p2cfkv2" 
            alt="hotspring sample" 
          />
          <div className="flex flex-col justify-between py-6 lg:mx-6">
            <span className="text-xl text-black">
              {spring.name}
            </span>
            <span className="text-l text-black">
              {spring.city}
            </span>
            <p className="text-sm font-semibold text-black">
              {spring.description}
            </p>
          </div>
        </div>
      </div>
      <div>
        {displayModal && (
          <SpringModal spring={spring} modalState={displayModal} handler={handleClick}/>
        )}
      </div>
    </>
  )
}

export default SingleSpring;
