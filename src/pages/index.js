import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navigation from 'components/nav'
import MainPage from 'components/main'
import Footer from 'components/footer'
import Card from 'components/card'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {


  return (
    <>
      <div>
        <Navigation />
        <MainPage />
        <Card />

        <footer>
          <Footer />
        </footer>

      </div>
    </>
  )
}
