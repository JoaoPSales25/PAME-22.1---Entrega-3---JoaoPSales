import React from 'react'
import "./login.css"
import facebook from "../Assets/facebook-logo.png"
import google from "../Assets/google.png"

const LoginPopUp = ({closeModal}) => {
  return (
    <div className='popup-container'>
        <div className='popup-close cursor-pointer' onCLick = {() => closeModal(false)}> 
            <i  onClick = {() => closeModal(false)} class="fi fi-rr-cross"></i>
        </div>
        <div className='popup-titulo'>
            Iniciar Sessão
        </div>
        <div className='popup-facebook cursor-pointer box'>
            <img src= {facebook} alt="" className='popup-facebook-logo'/>
            <div className='popup-facebook-text'>Continuar com facebook</div>
        </div>
        <div className='popup-google cursor-pointer box'>
            <img src= {google} alt= "" className='popup-google-logo'/>
            Continuar com Google
        </div>
        <div className='popup-ou'> ou </div>
        <input className='popup-input' placeholder='Escreva seu número' />
        <div className='popup-cadastro'>
            Ainda não se cadastrou? <span className='popup-registre cursor-pointer'> Registre-se aqui</span>
        </div>
    </div>
    
  )
}

export default LoginPopUp