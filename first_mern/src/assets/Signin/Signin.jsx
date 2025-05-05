import React from 'react'

const Signin = () => {
  const [Email,setemail]=usestate('')
  const [Password,setpassword]=usestate('')
  const [Name,setname]=usestate('')

  return (
    <div>
      <h1>Signin</h1>
      <form>
        <input type="email" placeholder='Email' value={Email} onChange={(e)=>setemail(e.target.value)} />
        <input type="password" placeholder='Password' value={Password} onChange={(e)=>setpassword(e.target.value)} />
        <button type='submit'>Signin</button>
      </form>

    </div>
  )
}

export default Signin