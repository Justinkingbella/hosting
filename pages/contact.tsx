import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactSection from  '../components/contact/ContactSection'

const contact: NextPage = () => {
    return (
      <div className=" ">
        <Head>
          <title>Graphic Viewer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-neutral-900 min-h-screen flex flex-col max-w-[1500px] mx-auto">
        
         <Navbar />
         <ContactSection/>
        
  
        <Footer />
        </main>
      </div>
    )
  }
  
  export default contact