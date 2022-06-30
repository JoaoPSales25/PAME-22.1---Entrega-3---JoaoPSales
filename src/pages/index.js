import React, { useState } from 'react'
import Footer from '../components/common/footer'
import Header from '../components/common/header'
import Delivery from '../components/delivery'
import LoginPopUp from '../components/login'
import Padaria from '../components/padaria'



const HomePage = () => {

    const [activeTab, setActiveTab] = useState("Delivery");
    const [openModal, setOpenModal] = useState(false)

  return (
    <div>
    <Header activeTab= {activeTab} setActiveTab = {setActiveTab} openModal = {setOpenModal} />
    {openModal && <LoginPopUp closeModal = {setOpenModal}/>}
    {getCorrectScreen(activeTab)}
    <Footer/>
    </div>
    
    
  )
}

const getCorrectScreen = (tab) => {
    switch(tab) {
        case "Delivery" :
            return <Delivery/>
        case "Padaria" :
            return <Padaria/>
        default:
            return <Delivery/>
    }
}


export default HomePage