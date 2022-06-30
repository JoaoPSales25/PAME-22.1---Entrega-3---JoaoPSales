import React from 'react'
import './footer.css'
import BigMark from "../../Assets/BigMark.png";

const Footer = () => {
  return (
    <div className=' footer'>

        <div className='footer-institucional'>
            <div className='footer-logo-cover'> <img src={BigMark} alt = "logo" className='footer-logo'/></div>
            <div className='footer-copy'>
            © Copyright 2021 - BigMark - Todos os direitos reservados BigMark com Agência de Restaurantes Online S.A.
            CNPJ 00.000.000/0000-00 / Rua, nº xxxx, São Pedro da Serra, NovaFriburgo/RJ - CEP 00.000.00-00
            </div>
            <div className='footer-links'>
                <ul className='footer-links-list cursor-pointer'> 
                    <li>Termos e condições de uso</li>
                    <li>Código de conduta</li>
                    <li>Privacidade</li>
                    <li>Dicas de Segurança</li>
                </ul>
            </div>
        </div>
        

    </div>
  )
}

export default Footer