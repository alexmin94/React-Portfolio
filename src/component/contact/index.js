import React from 'react'
import {useForm}from "react-hook-form"

export default function Contact() {
    const {
        register, 
        handleSubmit,
        formState:{errors},

    }=useForm()
    const onSubmit=async(data)=>{console.log("emailSubmitted",data)}
    
    
  return (
    <div className='contact'>
        <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Name</label>
          <input {...register('name', { required: true })} />
          {errors.name && <span>This field is required</span>}
        </div>
        <div>
          <label>Email</label>
          <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span>Please enter a valid email address</span>}
        </div>
        <div>
          <label>Message</label>
          <textarea {...register('message', { required: true })} />
          {errors.message && <span>This field is required</span>}
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  )
}
