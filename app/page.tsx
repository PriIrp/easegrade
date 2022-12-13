'use client'

import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../lib/AuthContext'

export default function Login() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const user = useRef<HTMLDivElement>();
    const pass = useRef<HTMLDivElement>();

    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
  
   async function handleSubmit(e: any){
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        // await login(username, password)
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)

      console.log(username)

      setUsername("");
      setPassword("");
   }
    

    useEffect(
      () => console.log(username)
    )

    return(
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit}>
          <div>
            <input 
              className=''
              id='userName'
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              placeholder='username'/>
          </div>
          <div>
            <input
            id='password'
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'/>
          </div>

          <button type="submit" className="btn btn-primary my-2">
						Login
					</button>
      </form>

    </div>
  )
}
