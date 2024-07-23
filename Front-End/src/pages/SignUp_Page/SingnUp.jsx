import { useState } from 'react'
import FormInputs from '../../components/FormInputs.jsx'
import Button from '../../components/Button.jsx'
import DropDownList from '../../components/DropDownList.jsx'

function SingnUp() {
  const [values, setValues] = useState({})
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
    }, {
      id: 6,
      type: "Gender",
      placeholder: "Gender",
      name: "gender",
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

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  console.log(values);
  return (
    <>
      <div className=' h-screen w-screen p-6 flex justify-center items-center '>
        <div className='bg-white w-5/6 h-4/5 flex justify-center items-center bg-tranparent border-solid p-4 rounded-3xl overflow-hidden'>
          <div className=' w-1/2 h-full bg-tranparent rounded-3xl flex justify-center items-center flex-col '>
            <div className=' left-0 text-4xl py-4'>Sign Up</div>
            <form className='flex flex-col justify-center items-center gap-4 h-56 flex-wrap mr-4 mb-4' >
              {formInputArr.map((inputs) => (
                <FormInputs key={inputs.id} {...inputs} onChange={onChange} />
              ))}
              {/* **Gender** */}
            </form>
            <Button name="Sign Up" type="submit" />
            <p className='py-2'>Already have an account ? <a href="#" className=" text-lightblue">Log in</a> </p>
          </div>
          <div className=' w-1/2 h-full bg-lightblue rounded-3xl bg-signup bg-no-repeat bg-cover bg-top '></div>
        </div>
      </div>
    </>
  )
}

export default SingnUp