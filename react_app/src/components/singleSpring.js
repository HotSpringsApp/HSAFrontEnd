const SingleSpring = ({ spring }) => {
  return (
    <div className="lg:flex">
      <img className="object-cover w-full h-56 rounded-lg lg:w-64" src="https://tinyurl.com/2p2cfkv2" alt="hotspring sample" />
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <span className="text-xl text-gray-500 dark:text-gray-300">
          {spring.name}
        </span>
        <span className="text-l text-gray-500 dark:text-gray-300">
          {spring.city}
        </span>
        <p className="text-sm font-semibold text-gray-800 dark:text-black ">
            {spring.description}
        </p>
      </div>
    </div>
  )
}

export default SingleSpring;
