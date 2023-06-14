import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'Open Notes',
    description: 'Open Notes is a free and open source note taking app.'
}


const layout = ({children}) => {
  return (
    <Provider>
     <html lang="en">
       <body>
         <div className="main">
            <div className="gradiant" />
         </div>
        <main className="app">
          <Nav />
            {children}
        </main>
       </body>
     </html>
     </Provider>
  )
}

export default layout