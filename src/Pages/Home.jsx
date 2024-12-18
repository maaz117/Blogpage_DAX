import React from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* Search */}
        <Search/>
        {/* Blogs */}
        <Blogs/>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default Home