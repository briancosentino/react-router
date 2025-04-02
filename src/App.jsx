import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import PostList from './pages/PostList'
import About from './pages/About'
import ProductPage from './pages/ProductPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chi-siamo' element={<About />} />
        <Route path='/posts' element={<PostList />} />
        <Route path='/posts/:slug' element={<ProductPage />} />
      </Routes>
    </>
  )
}

export default App
