import React,{ useState,ChangeEvent } from 'react'
import './Contac.css'

interface Loginform{
      name: string,
      email: string,
      message: string
}

let instalstate: Loginform = {
  name: '',
  email: '',
  message: ''
}

const Contac: React.FC = () => {
const [formdata, setFormdata] = useState<Loginform>(instalstate)
const handlesubmit = (e:ChangeEvent<HTMLInputElement>) => {
  e.preventDefault()
  let {value,name} = e.target
  setFormdata(p=>({...p,[name]:value}))
}

console.log(formdata)   ;

  return (
    <>
       <div className="modal_warpper">
        <div className='modal'>
               <form>
                   <input type="text" onChange={handlesubmit} name='name' placeholder='Name' />
                   <input type="email" onChange={handlesubmit} name='email' placeholder='Email' />
                   <input type="text" onChange={handlesubmit} name='message' placeholder='Message' />
                   <button>SEND</button>
               </form>
        </div>
       </div>
    </>
  )
}

export default Contac