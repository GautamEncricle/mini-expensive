import React from 'react'
import { useState } from 'react'
import axiosInstance from '../api/axios'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post('/auth/login', {
        email,
        password,
      })
      console.log('Login successful:', response.data)
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <>
      <h1>Login Page</h1>
      <label htmlFor="email">Email:</label>
      <input onChange={handleEmailChange} type="email" id="email" name="email" required />
      <br />
       <label htmlFor="password">Password:</label>
      <input onChange={handlePasswordChange} type="password" id="password" name="password" required />
      <br />
      <button type="submit" onClick={handleSubmit}>Login</button>
    </>
  )
}

export default Login