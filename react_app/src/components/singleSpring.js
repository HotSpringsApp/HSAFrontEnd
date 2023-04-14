import { useState } from "react";
import SpringModal from "./springModal";

const SingleSpring = ({ spring }) => {  
  
  // display modal with clicked spring info
  const [displayModal, setDisplayModal] = useState(false);

  const handleClick = () => {
    setDisplayModal(!displayModal);
  }

  // like a spring
  const [likes, setLikes] = useState(0);
  
  const handleLikeBtn = () => {
    let currentLikes = likes;
    setLikes(currentLikes += 1);
  }

  return (
    <>
      <div className="lg:flex">
        <div className="lg:flex" onClick={handleClick}>
          <img 
            className="object-cover w-full h-56 rounded-lg lg:w-64" 
            src="https://tinyurl.com/2p2cfkv2" 
            alt="hotspring sample"
            // onClick={handleClick}
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
        <div className="flex py-6 lg:mx-6">
          <img
            className="w-14 h-14"
            src={require("../assets/images/like_icon.png")}
            alt="like icon"
            onClick={handleLikeBtn}
          />
          <p className="">
            Likes: {likes}
          </p>
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
