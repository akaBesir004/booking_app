'use client'
import { AuthProvider } from '@/context/authContext'
import React from 'react'


const AuthWrapper = ({children}) => {
  return (
   <AuthProvider>{children}</AuthProvider>
  )
}

export default AuthWrapper