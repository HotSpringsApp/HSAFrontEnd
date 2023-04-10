import SpringModal from "./springModal";

const SingleSpring = ({ spring, onClick, openModal }) => {
  return (
    <>
      <div onClick={onClick}>
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
      <div onClick={onClick}>
        <SpringModal spring={spring} openModal={openModal}/>
      </div>
    </>
  )
}

export default SingleSpring;
