import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Display from '../../components/Display/Display'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {
  const [category,setCategory] = useState("All");  
  return (
    <div>
      < Header/>
      < Menu category={category} setCategory={setCategory}/>
      < Display category={category}/>
      < AppDownload />
    </div>
  )
}

export default Home
