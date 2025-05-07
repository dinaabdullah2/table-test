// import React, { useEffect, useState } from 'react'
// import {  Modal } from '@mantine/core';
// type Modal_TP = {
//     opened?:boolean;
//     children?:React.ReactNode;
//     setOpen?:(opened: boolean) => void;
//     title?:string
// }
// const ModalCusom = ({opened,setOpen,title,children}:Modal_TP) => {
//     const [windowSize, setWindowSize] = useState<number | any>();

//     useEffect(() => {
//         function handleResize() {
//           setWindowSize(window.innerWidth);
//         }
//         window.addEventListener("resize", handleResize);
//         handleResize();
//         return () => window.removeEventListener("resize", handleResize);
//       }, []);

//   return (
//     <Modal opened={opened} size={windowSize >= 900? '65%':windowSize >= 600?  '90%' :'95%'} onClose={()=>{setOpen?.(!opened)}} title={title}>
//         {children}
//     </Modal>
//   )
// }

// export default ModalCusom
