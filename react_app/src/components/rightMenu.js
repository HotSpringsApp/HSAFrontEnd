import { useState } from 'react';
import MainContainer from './mainContainer';

const RightMenu = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  }

  return (
    <>
      <div className="flex">
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2">Language</button>
        </div>
        <div className="mr-6">
          <button className="border border-white rounded-md py-1 px-2" onClick={openModal}>About Us</button>
        </div>
      </div>
      {modal && <MainContainer open={modal}/>}
    </>
  )
}

export default RightMenu;
