import React, { useState } from 'react'
import FormInputs from '../../components/FormInputs'
import Button from '../../components/Button'

function LogIn() {
  const [values, setValues] = useState({})
  const formInputArr = [
    {
      id: 1,
      type: "text",
      placeholder: "Username",
      name: "username",
    },
    {
      id: 2,
      type: "password",
      placeholder: "Password",
      name: "password",
    },
  ]
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
    console.log(values);
  }

  return (
    <>
      <div className=' h-screen w-screen p-6 flex justify-center items-center '>
        <div className='bg-white w-4/6 h-4/5 flex justify-center items-center bg-tranparent border-solid p-4 rounded-3xl'>
          <div className=' w-1/2 h-full bg-tranparent rounded-3xl flex justify-center items-center flex-col '>
            <div className=' left-0 text-4xl py-4'>Log In</div>
            <form className='flex flex-col justify-center items-center gap-4' >
              {formInputArr.map((inputs) => (
                <FormInputs key={inputs.id} {...inputs} onChange={onChange} />
              ))}
              <Button name="Log In" />
            </form>
            <p className='py-4'>Don&apos;t have account ? <a href="#" className=" text-lightblue">Sign Up</a> </p>
          </div>
          <div className=' w-1/2 h-full bg-lightblue rounded-3xl bg-login bg-no-repeat bg-cover'></div>
        </div>
      </div>
    </>
  )
}

export default LogIn