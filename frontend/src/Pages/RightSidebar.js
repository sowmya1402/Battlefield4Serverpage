import React, { useState } from 'react';
import '../styles/RightSidebar.css';
import Squad from "../assets/SquadJoin.png";
import online from "../assets/online.png";
import offline from "../assets/offline.png";
import sym1 from "../assets/squad.png";
import sym2 from "../assets/OnlineSymbol.png";
import sym3 from "../assets/OfflineSymbol.png";



const RightSidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  return (
    <div
      className={`right-sidebar ${isExpanded ? 'expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    > 
      <div className={`sidebar-section ${isExpanded ? 'expanded' : ''}`}>
        <div className="status-container">
          <div className="status-top">
            <img src={sym1} alt="online symbol" className="status-sym" />
            {isExpanded && (
              <h3 className="section-title">Squad</h3>
            )}
          </div>
          <div className="user">
            <img src={Squad} alt="online" className="status-icon" />
          {isExpanded && (
            
              
              <div className="user-info">
                <span className="username">Squad Join</span>
                
              </div>
            
          )}
          </div>
        </div>
      </div>
      <div className={`sidebar-section ${isExpanded ? 'expanded' : ''}`}>
        <div className="status-container">
          <div className="status-top">
            <img src={sym2} alt="online symbol" className="status-sym" />
            {isExpanded && (
              <h3 className="section-title">ONLINE</h3>
            )}
          </div>
          <div className="user">
            <img src={online} alt="online" className="status-icon" />
          {isExpanded && (
            
              
              <div className="user-info">
                <span className="username">MaryJane</span>
                <span className="status">Online</span>
              </div>
            
          )}
          </div>
        </div>
      </div>
      <div className={`sidebar-section ${isExpanded ? 'expanded' : ''}`}>
        <div className="status-container">
          <div className="status-top">
            <img src={sym3} alt="offline symbol" className="status-sym" />
            {isExpanded && (
              <h3 className="section-title">OFFLINE</h3>
            )}
          </div>
          <div className="user">
              <img src={offline} alt="offline" className="status-icon" />
          {isExpanded && (
            
              <div className="user-info">
                <span className="username">420</span>
                <span className="status">Offline</span>
              </div>
            
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
