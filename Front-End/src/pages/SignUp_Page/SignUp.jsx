import { useState } from 'react'
import FormInputs from '../../components/FormInputs.jsx'
import Button from '../../components/Button.jsx'
import DropDownList from '../../components/DropDownList.jsx'
import useSignUp from '../../hooks/useSignUp.jsx'
import { Link } from 'react-router-dom'

function SingnUp() {
  // const [values, setValues] = useState({})

  const formInputArr = [
    {
      id: 1,
      type: "text",
      placeholder: "Full Name",
      name: "fullname",
    },
    {
      id: 2,
      type: "text",
      placeholder: "Username",
      name: "username",
    },
    {
      id: 5,
      type: "email",
      placeholder: "Email",
      name: "email",
    },
    {
      id: 3,
      type: "password",
      placeholder: "Password",
      name: "password",
    },
    {
      id: 4,
      type: "password",
      placeholder: "Confirm Password",
      name: "confirmPassword",
    },



  ]

  const { signup } = useSignUp()
  
  const handleSignUpForm = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const finalDatas = Object.fromEntries(formData.entries());
    signup(finalDatas)
  }
  return (
    <>
      <div className=' h-screen w-screen p-6 flex justify-center items-center '>
        <div className='bg-white w-5/6 h-4/5 flex justify-center items-center bg-tranparent border-solid p-4 rounded-3xl overflow-hidden'>
          <div className=' w-1/2 h-full bg-tranparent rounded-3xl flex justify-center items-center flex-col '>
            <div className=' left-0 text-4xl py-4'>Sign Up</div>

            <form onSubmit={handleSignUpForm} id='singup' className='flex flex-col justify-center items-center gap-4 h-52 flex-wrap mr-4 mb-4 relative' >

              {formInputArr.map((inputs) => (
                <FormInputs key={inputs.id} {...inputs} />
              ))}

              <DropDownList />
            </form>
            <Button name="Sign Up" type="submit" form="singup" />

            <p className='py-2'>Already have an account ? <Link to="/login" className=" text-lightblue">Log in</Link> </p>
          </div>
          <div className=' w-1/2 h-full bg-lightblue rounded-3xl bg-signup bg-no-repeat bg-cover bg-top '></div>
        </div>
      </div>
    </>
  )
}

export default SingnUp