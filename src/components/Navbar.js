import React from 'react'
import user from "../assets/user.png"
function Navbar() {
  return (
    <>
        <div className='navbar'>
            <h1>User’s inventory</h1>
<img src={user}></img>
        </div>
    </>
  )
}

export default Navbar