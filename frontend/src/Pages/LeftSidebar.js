import React from 'react';
import battlefieldV_Icon from "../assets/bV_icon.png";
import battlefieldI_Icon from "../assets/bI_icon.png";
import battlefieldIV_Icon from "../assets/bIV_icon.png";
import battlefieldH_Icon from "../assets/bH_icon.png";
import career from "../assets/career_icon.png";
import vector from "../assets/Vector.png";
import menu from "../assets/side-menu.png";
import power from "../assets/Power.png";
import help from "../assets/help.png";

const LeftSidebar = () => {
  const styles = { 
    leftSidebar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'left',
      padding: '1rem',
      marginTop: '8rem',
    },
    sidebarItem: {
      marginBottom: '0.3rem',
     
    },
    sidebarItemDown: {
      marginBottom: '0.5rem',
      
      marginTop: '1rem', 
    },
    img: {
      width: '25px', 
      height: '25px',
    },
    sidebarhelp: {
      marginBottom: '0.5rem',
      marginTop: '15rem', 
    },
    sidebarpower: {
      marginBottom: '0.5rem',
      marginTop: '1rem', 
    },
    image:{
      width: '15px', 
      height:'15px',
    }
  };

  return (
    <div className="left-sidebar" style={styles.leftSidebar}> 
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={battlefieldV_Icon} alt='BV' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={battlefieldI_Icon} alt='BI' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={battlefieldIV_Icon} alt='BIV' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={battlefieldH_Icon} alt='BH' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={career} alt='career' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItemDown}>
        <img src={vector} alt='vector' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarItem}>
        <img src={menu} alt='menu' style={styles.img} />
      </div>
      <div className="sidebar-item" style={styles.sidebarhelp}>
        <img src={help} alt='menu' style={styles.image} />
      </div>
      <div className="sidebar-item" style={styles.sidebarpower}>
        <img src={power} alt='menu' style={styles.image} />
      </div>
    </div>
  );
};

export default LeftSidebar;
