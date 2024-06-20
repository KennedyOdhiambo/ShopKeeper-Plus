'use client'

import React, { ReactNode, useContext } from 'react'
import LoginCarousel from './components/LoginCarousel'
import { AuthContext } from '@/context/AuthContext'
import AuthHeader from './components/AuthHeader'

type AuthProps = {
   children: ReactNode
   login: ReactNode
   signup: ReactNode
}

export default function AuthLayout({ login, signup }: AuthProps) {
   const authContext = useContext(AuthContext)
   const authProcess = authContext?.runningProcess!
   return (
      <section className="">
         <div className="flex flex-col h-svh">
            <AuthHeader />
            <div className="flex-1 grid xl:grid-cols-2 items-center justify-items-center mb-20">
               {authProcess === 'login' ? login : signup}
               <LoginCarousel />
            </div>
         </div>
      </section>
   )
}
