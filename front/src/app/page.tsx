"use client"
import MainProvider from './providers/MainProvider'
import { NextPage } from 'next'
import Home from '../app/components/screens/home/Home'


const HomePage: NextPage = () => {
  return (

    <MainProvider>
      <Home />
    </MainProvider>
  )
}

export default HomePage;