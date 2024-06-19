import React, { useEffect, useState } from 'react'
import axios from 'axios'
import male from '../../assets/imgs/male-avatar-boy-face-man-user-9.svg'
import fmale from '../../assets/imgs/female-avatar-girl-face-woman-user-2.svg'

const Users: React.FC = () => {
    const Api: string = 'https://dummyjson.com/'

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(`${Api}users?limit=4` )
        .then(res => setUsers(res.data.users))
        .catch(err => console.log(err))
    }, [])
    
    let data = users?.map((user: any) => {
        return (
            <div key={user.id}>
                <div className='img_user'>
                 <img src={user.gender === 'male' ? male : fmale} alt="" />
                </div>
               <div className='text_user'>
               <h2>{user.firstName}</h2>
               <p>{user.lastName}</p>
               </div>
            </div>
        )
    })
    
  return (
   <>
  <div className="container">
    <h1 style={{textAlign: 'center',margin: '32px 0'}}>Meet our team</h1>
      <div className='users_wrapper'>
   {data}
      </div>
  </div>
   </>
  )
}

export default Users