"use client";

import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'
import { ThemeProvider } from "next-themes"


export const metadata = {
    title: 'Open Notes',
    description: 'Open Notes is a free and open source note taking app.'
}


const layout = ({children}) => {
  return (

    <Provider>
     <html lang="en">
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