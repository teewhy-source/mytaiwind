import React from 'react'
const UserInfo = (props) => {
  return (
    <div className='w-screen h-80 flex flex-col justify-center items-center bg-yellow-600'>
<h1 className='font-extrabold text-green-500 italic'>my name is {props.fname}</h1>
<h1>my email is {props.email}</h1>
<h1>my number is {props.phone}</h1>
<h1>my last name {props.lastname}</h1>

        </div>
  )
}
export default UserInfo;
