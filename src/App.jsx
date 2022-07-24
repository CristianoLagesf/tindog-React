import { Button } from '@mui/material'
import { AppleLogo, GooglePlayLogo } from 'phosphor-react'
import './App.css'
import Menu from './components/Menu.jsx'


function App() {


  return (
    <>
      <Menu />
      <div className="mt-[80px] flex justify-between ml-2">
        <div className="w-[400px]">
          <label className="text-6xl font-extrabold font-sans ">
            Meet new and interesting dogs nearby.
          </label>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#" className="flex gap-2 font-extrabold text-xl text-gray-900 border justify-center items-center bg-gray-300  w-[150px] h-[40px] rounded shadow-lg
                    hover:contrast-125
                    active:scale-90 ">
              <AppleLogo size={22} color="#141414" weight="duotone" />
              Download
            </a>
            <a href="#" className="flex gap-2 font-extrabold text-xl text-gray-900 border justify-center items-center bg-gray-300  w-[150px] h-[40px] rounded shadow-lg
                    hover:contrast-125
                    active:scale-90">
              <GooglePlayLogo size={22} color="#141414" weight="duotone" />
              Download
            </a>
          </div>
        </div>
        <div className="h-[864px] w-[534px] bg-bgImage bg-no-repeat bg- rotate-6" >
          {/* <img src="./assets/images/iphone6.png" className="h-11 w-11" /> */}
        </div>
      </div>
    </>

  )
}

export default App
