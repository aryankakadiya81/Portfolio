import React from 'react'
// import Navbar from './Components/Navbar'
import Hero_Section from './Components/Hero_Section'
import Team_Section from './Components/Team_Section'
import Contect_Section from './Components/Contect_Section'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Combine from './Components/Combine'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
          <Route path='/' element={<Combine></Combine>}></Route>
          <Route path='/Team' element={<Team_Section></Team_Section>}></Route>
          <Route path='/Contect' element={<Contect_Section></Contect_Section>}></Route>
          <Route path='/About' element={<Hero_Section></Hero_Section>}></Route>



        </Routes>

        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
// <Navbar></Navbar>
