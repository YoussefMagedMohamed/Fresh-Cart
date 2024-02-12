import { useFormik } from 'formik'
import React from 'react'

export default function Register() {

  // Submit Form
  function registerSubmit() {
    console.log("Hello");
  }

  // Handle Our Form
  let formik = useFormik({
    initialValues: {
      name:"",
      email:"",
      password:"",
      rePassword:"",
      phone:"",
    },onSubmit: registerSubmit
  })

  return <>
    <div className="w-75 py-4 mx-auto">
      <h2>Register Now :</h2>
      <form className='my-4'>
        <label htmlFor="name" className='mb-2'>Name :</label>
        <input type="text" className='form-control mb-3' name='name' placeholder='Enter Your Name' id='name'/>

        {/* <label htmlFor="email" className='mb-2'>Email :</label>
        <input type="email" className='form-control mb-3' name='email' placeholder='Enter Your E-mail' id='email'/>

        <label htmlFor="password" className='mb-2'>Password :</label>
        <input type="password" className='form-control mb-3' name='password' placeholder='Enter Your Password' id='password'/>

        <label htmlFor="repassword" className='mb-2'>Re-Password :</label>
        <input type="password" className='form-control mb-3' name='rePassword' placeholder='Enter Your Re-Password' id='repassword'/>

        <label htmlFor="phone" className='mb-2'>Phone :</label>
        <input type="tel" className='form-control mb-3' name='phone' placeholder='Enter Your Phone' id='phone'/> */}

        <button className='btn bg-main text-light'>Register</button>
      </form>
    </div>
  </>
}
