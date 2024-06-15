import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/header'

import {data} from './data.js'
function Desc({title , description}) 
{ 
    return(
        <div className='desc-box'>
            <ul>
                <li>
                    <p>
                        <strong>{title}</strong> ,{description}
                    </p>
                </li>
            </ul>
        </div>
    )
}

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <div>
        <Header />
        
        <section className='desc'>
        <Desc {...data[0]}/>
        <Desc {...data[1]}/>
        <Desc {...data[2]}/>
        <Desc {...data[3]}/>
        </section>
    </div>
   </>
  )
}

export default App
