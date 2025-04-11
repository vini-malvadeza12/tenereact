import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
function App() {
  const [count, setCount] = useState(0)
  return (
    
        <>
        <Header></Header>
        <div className="container">
        <div className="gridprodutos">
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/30/33/15/303315cd9d75c9ad4e12a5a507553098.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/7e/3d/6a/7e3d6a347a5d9399a0a2d6eeaeb57aa7.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/ae/0a/a1/ae0aa1dce2a9e8f1d26b09f67a335e05.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/f6/b9/08/f6b9081732e03dd9873edf7c3fabcf34.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/d8/19/af/d819af9043abf559d3c6290f6eca57ca.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/40/e9/58/40e958f6dc59e3618a5878f15b045461.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/e4/66/ce/e466ce955785fbc5eaf3eb3210b03b35.jpg" alt="" className="produtos"/>
            </div>
            <div className="produtos">
                <img src="https://i.pinimg.com/236x/95/c2/c1/95c2c1d749a846b8d7055dab68a97d96.jpg" alt="" className="produtos"/>
            </div>
        </div>
        
    </div>
   <Footer></Footer>


        </>    
  )
}

export default App
