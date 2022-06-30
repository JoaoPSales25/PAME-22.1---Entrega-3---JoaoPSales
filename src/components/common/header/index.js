
import TabOptions from '../tabOptions';
import './header.css';
import BigMark from "../../Assets/BigMark.png";

function Header({activeTab, setActiveTab,  openModal}) {

    

    return (
        <div className='header max-width'>
            
                <img src={BigMark} alt= "logo" className='header-logo'/>
                <TabOptions setActiveTab={setActiveTab} activeTab = {activeTab}/>
                <div className='header-right'>
                    <div className='header-search-wrapper'>
                        <div className='header-search-bar'>
                        <i className="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder='Procure por um produto, marca ou categoria' className='search-input'/>
                        </div>
                    </div>
                    <div className="header-icons-right">
                        <div className="header-adress cursor-pointer">
                            <span className='header-adress-text'>Seu endereço aqui</span>
                            <i class="fi fi-rr-angle-down arrow-icon absolute-center"></i>
                        </div>
                        <i onClick = {() => openModal(true)} class="fi fi-rr-sign-in-alt login-icon absolute-center cursor-pointer"></i>
                        <i class="fi fi-rr-picnic basket-icon absolute-center cursor-pointer"></i>
                    </div>
               
            </div>
        </div>

    );

}




export default Header
