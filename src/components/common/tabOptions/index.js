import React from 'react'
import "./tabOptions.css"

const tabs = [
    {
        id: 1,
        name: "Delivery",
        
    },
    {
        id: 2,
        name: "Padaria",
        
    }
]

const TabOptions = ({activeTab, setActiveTab}) => {    

  return (
    <div className="tab-options">
        <div className="max-width options-wrapper">
            {tabs.map((tab) => {
                return (
                <div 
                onClick= {() => setActiveTab(tab.name)} 
                className = {`tab-item absolute center cursor-pointer ${
                    activeTab === tab.name && "active-tab"
                }`}
                >
                    <div> {tab.name}</div>
                </div>  
                );
            })}
        </div>
    </div>
  );
};

export default TabOptions