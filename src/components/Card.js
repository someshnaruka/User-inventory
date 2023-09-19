import React, { useEffect, useState } from 'react'
import Modal from './Modal';

function Card({data,ondelete,onEdit,onView}) {
  
const [color,setcolor]=useState("");
const [modal, setModal] = useState(false);
  const [action, setAction] = useState("");
    useEffect(()=>{
        (()=>{
            if(Number(data.age)<25)
            {
                setcolor("green")
            }
            else if(Number(data.age) <50)
            {
                setcolor("purple")
            }
            else
            {
                setcolor("orange")
            }
        })()
    },[data])


  return (
    <>
<div className='card'>
    <div className='card-header'>
        <h1>{data.name}</h1>
        <div id='circle' style={{width:"20px",height:"20px",borderRadius:"100%",backgroundColor:color}}></div>
    </div>
    <div className='card-body'>
        <p>AGE:<strong>{data.age}</strong> </p>
        <p>DOB: <strong>{data.dob}</strong></p>
        <p>GENDER:<strong>{data.gender}</strong> </p>
        <p>FOOD: <strong>{data.food}</strong></p>
        <p>HOBBIES: <strong>{data.hobbies}</strong></p>
    </div>
    <div className='card-footer'>
        <button className='close' onClick={()=>ondelete(data.id)}>Delete</button>
        <button className='active' onClick={()=>{document.body.style.overflowY = "hidden";
                setModal(true);setAction("VIEW")}}>View</button>
        <button className='active' onClick={()=>{document.body.style.overflowY = "hidden";
                setModal(true);setAction("EDIT")}}>Edit</button>
    </div>
    {modal && (
            <Modal
              onClose={() => {
                document.body.style.overflowY = "auto";
                setModal(false);
                
              }}
              value={data}
              action={action}
              check={true}
            ></Modal>
          )}
</div>
    </>
  
  )
}

export default Card