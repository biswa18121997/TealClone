import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import FirstComponent from './Components/FirstComponent'
import SecondComponent from './Components/SecondComponent'
import MatchingMode from './Components/MatchingMode'
import JobTracker from './Components/JobTracker'
import ResumeBuilder from './Components/ResumeBuilder'
import LongestComponent from './Components/LongestComponent'
import HowItWorks from './Components/HowItWorks'
import CoverLetter_Resume_CV from './Components/CoverLetter_Resume_CV'
import SampleCover_Resumes from './Components/SampleCover_Resumes'
import Review from './Components/Review'
import TealFeatures from './Components/TealFeatures'
import TealMembership from './Components/TealMembership'
import Footer from './Components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Tools from './Components/Tools'
function App() {
  


  return (
    <>
      <Header />
      <FirstComponent />
      <SecondComponent />
      <LongestComponent />
      <HowItWorks />
      <CoverLetter_Resume_CV />
      <SampleCover_Resumes />
      <Review />
      <TealFeatures />
      <TealMembership />
      <Footer />
      
    </>
  )
}

export default App
