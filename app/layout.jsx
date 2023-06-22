"use client";

import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { ThemeProvider } from "next-themes"
import Head from 'next/head';





const layout = ({children}) => {
  return (

    <Provider>
     <html lang="en">
      <Head>
         <link rel="shortcut icon" href="images/logo.svg" />
      </Head>
       <body>
       <ThemeProvider attribute="class">
         <div className="main">
            <div className="gradiant" />
         </div>
        <main className="app">
          <Nav />
            {children}
        </main>
        </ThemeProvider>
       </body>
     </html>
     </Provider>

     
  )
}

export default layout