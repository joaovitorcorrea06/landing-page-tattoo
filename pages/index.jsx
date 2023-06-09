import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import BtnTop from '../components/btnTop'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section5 from '../components/section5'
import Section6 from '../components/section6'
import styles from '../styles/Home.module.css'

export default function Home() {

  // animationSECAOxITEMy
  const [animations2i1, setAnimations2i1] = useState('hidden');
  const [animations2i2, setAnimations2i3] = useState('hidden');
  const [animations2i3, setAnimations2i2] = useState('hidden');
  const [animations3i1, setAnimations3i1] = useState('hidden');
  const [animations4i1, setAnimations4i1] = useState('hidden');
  const [animations5i1, setAnimations5i1] = useState('hidden');
  const [animations5i2, setAnimations5i2] = useState('hidden');
  const [animations5i3, setAnimations5i3] = useState('hidden');
  const [animations6card1, setAnimations6card1] = useState('hidden');
  const [animations6card2, setAnimations6card2] = useState('hidden');
  const [animations6card3, setAnimations6card3] = useState('hidden');

  useEffect(() => {
    window.onscroll = () => {
      handleScroll()
      console.log(document.documentElement.scrollTop)
    }
  }, );

  function handleScroll() { 
    if (document.documentElement.scrollTop > 300) {
      setAnimations2i1('show')
      setAnimations2i2('show')
      setAnimations2i3('show')
   } else {
    setAnimations2i1('hidden')
    setAnimations2i2('hidden')
    setAnimations2i3('hidden')
   }
    if (document.documentElement.scrollTop > 2000) {
      setAnimations3i1('show')
   } else {setAnimations3i1('hidden')}
    if (document.documentElement.scrollTop > 3000) {
      setAnimations4i1('show')
   } else {setAnimations4i1('hidden')}
    if (document.documentElement.scrollTop > 4000) {
      setAnimations5i1('show')
     } else {setAnimations5i1('hidden')}
    if (document.documentElement.scrollTop > 4500) {
      setAnimations5i2('show')
     } else {setAnimations5i2('hidden')}
    if (document.documentElement.scrollTop > 5000) {
      setAnimations5i3('show')
     } else {setAnimations5i3('hidden')}
    if (document.documentElement.scrollTop > 6200) {
      setAnimations6card1('show')
     } else {setAnimations6card1('hidden')}
    if (document.documentElement.scrollTop > 6200) {
      setAnimations6card2('show')
     } else {setAnimations6card2('hidden')}
    if (document.documentElement.scrollTop > 6200) {
      setAnimations6card3('show')
     } else {setAnimations6card3('hidden')}
   }
   
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link href="/dist/output.css" rel="stylesheet"/> */}
      </Head>
      <Navbar/>
      <Section1/>
      <Section2 animations2i1={animations2i1} animations2i2={animations2i2} animations2i3={animations2i3}/>
      <Section1/>
      <Section3 animations3i1={animations3i1}/>
      <Section4 animations4i1={animations4i1}/>
      <Section5 animations5i1={animations5i1} animations5i2={animations5i2} animations5i3={animations5i3}/>
      <Section6 animations6card1={animations6card1} animations6card2={animations6card2} animations6card3={animations6card3}/>
      <BtnTop/>
      <Footer/>
    </div>
  )
}
