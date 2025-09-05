import React from 'react'
import { useState } from 'react'
import axiosInstance from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axiosInstance.post('/auth/register', {
        name,
        email,
        password,
      })
      console.log('Registration successful:', response.data)
      navigate('/')
    } catch (error) {
      console.error('Registration failed:', error)
      alert(
        'Registration failed: ' +
          (error.response?.data?.message || error.message)
      )
    }
  }

  return (
    <>
      <h1>Register Page</h1>
      <label htmlFor="name">Name:</label>
      <input
        onChange={handleNameChange}
        type="text"
        id="name"
        name="name"
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        onChange={handleEmailChange}
        type="email"
        id="email"
        name="email"
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        onChange={handlePasswordChange}
        type="password"
        id="password"
        name="password"
        required
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Register
      </button>
    </>
  )
}

export default Register
