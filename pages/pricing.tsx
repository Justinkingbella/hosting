import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PricesHosting from '../components/price/PricesHosting'

const pricing: NextPage = () => {
    return (
      <div className=" ">
        <Head>
          <title>Graphic Viewer</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="">
        
         <Navbar />
         <PricesHosting/>
        
  
        <Footer />
        </main>
      </div>
    )
  }
  
  export default pricing