import React from 'react'
import {usestate} from 'react'
const Signup = () => {
  const [Name,setname]=usestate('');
  const [Email,setemail]=usestate('');
  const[Password,setpassword]=usestate('');
  return (
    <div>
      <h1>Signup</h1>
      <form>
        <input type="text" placeholder='Name' value={Name} onChange={(e)=>setname(e.target.value)} />
        <input type="email" placeholder='Email' value={Email} onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder='Password' value={Password} onChange={(e)=>setpassword(e.target.value)} />
        <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Signup