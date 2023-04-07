const AboutUsModal = ({open}) => {
  let modalStyle = null;
  let modalLayer = null;

  if (open) {
    modalStyle = 'inline absolute top-0 left-1/2 -ml-72.5 w-115 bg-white z-2'
    modalLayer = 'inline fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40 z-1'
  } else {
    modalStyle = 'hidden absolute top-0 left-1/2 -ml-72.5 w-115 bg-white z-2';
    modalLayer = 'hidden fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-40 z-10'
  }

  return (
    <>
      <div className={modalLayer}></div>
      <div className={modalStyle}>
        <p>Quis quisquam iste maiores ea deleniti inventore. Quas voluptatem dolor consequatur voluptate animi illo quas alias. Voluptatem sint doloremque omnis suscipit magnam. Ipsa ipsum qui rerum eaque nam vitae ex quae. Dolore inventore autem architecto corrupti voluptas officia ut.</p>
      </div>
    </>
  )
}

export default AboutUsModal;
