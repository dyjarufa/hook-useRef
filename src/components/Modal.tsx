import React,{ forwardRef, useCallback, useState, useImperativeHandle }  from 'react';

// Which methods I will sharing to parent component
export interface ModalHandles {
  openModal: () => void;
}

const Modal: React.ForwardRefRenderFunction<ModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(true);

  // expose this function to parent component
  const openModal = useCallback(() => {
    setVisible(true);
  },[])

  // will be called by parent component
  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  const handleCloseModal = useCallback(() => {
    setVisible(false);
  },[])
  
  if (!visible) {
    return null
  }

  return(
    <div>
      Modal Opened ✅

      <button onClick={handleCloseModal}>Close Modal</button>
    </div>
  )
}

export default forwardRef(Modal);