import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLessThan } from '@fortawesome/free-solid-svg-icons';
import ger_flag from '../assets/germany-flag.png';
import axios from 'axios';
import MapRotation from './MapRotation';
import '../styles/main.css';

const Serverscreen = () => {
  const styles = {
    mainScreen: {
      display: 'flex',
      flexDirection: 'column',
     
      padding: '1rem',
    },
    topButtonContainer: {
      display: 'flex',
      marginBottom: '1rem',
    },
    topButton: {
      backgroundColor: 'transparent', 
      border: 'none', 
      padding: '0.5rem', 
      cursor: 'pointer', 
      color: 'white', 
      fontWeight: 'normal', 
      margin: '0.5rem', 
    },
    topButtonHover: {
      fontWeight: 'bold', 
    },
    backButton: {
      backgroundColor: 'transparent', 
      border: 'none', 
      margin: '1rem',
      color: 'black',
    },
    scrollableContent: {
      flex: 1, 
      overflowY: 'auto', 
      maxHeight: '80vh', 
    },
    placeholders: {
      marginBottom: '1rem',
    },
    serverInfo: {
      fontSize: '46px',
      fontWeight: 'bold',
    },
    serverName: {
      fontSize: '36px',
      fontWeight: 'bold',
    },
    buttonContainer: {
      display: 'flex', 
      justfyContent: 'space-between', 
      gap:'10px',
    },
    button: {
      backgroundColor: 'transparent', 
      border: '1px solid grey', 
      padding: '0.5rem', 
      cursor: 'pointer', 
      color: 'white', 
      fontWeight: 'normal', 
      margin: '0.15rem',
      textAlign: 'center',
      width:'200px',
      
    },
    Starbutton: {
      backgroundColor: 'transparent', 
      border: '1px solid grey', 
      padding: '0.5rem', 
      cursor: 'pointer', 
      color: 'white', 
      fontWeight: 'normal', 
      margin: '0.15rem',
      textAlign: 'center',
      width:'100px',
      
    },
    playerInfo: {
      display: 'flex',
      alignItems: 'center',
    },
    serverSettings: {
      display: 'flex',
      padding: '0.5rem', 
    },
    settingsButton: {
      display: 'flex',
      justifyContent: 'space-between',
      backgroundColor: 'transparent', 
      border: 'none',
      borderBottom: '0.5px solid grey',
      color: 'white',
      width: '180px',
      padding: '0.5rem', 
      alignItems: 'left',
      cursor: 'pointer',
      marginRight: '75px',
    },
    spanFirst: {
      textAlign: 'left',
      width: 'auto',
    },
    spanSecond: {
      marginLeft: 'auto',
      textAlign: 'right',
      width: 'auto',
    },
  };

  const [sessionData, setSessionData] = useState(null);
  const [error, setError] = useState(null);

  const sessionId = "668bdc357ded9ca544da44a5"; 
  useEffect(() => {
    const fetchData = async () => {
      try{
        const response = await axios.get(`https://battlefiled4serverpage.onrender.com/api/sessions/${sessionId}`);
        console.log(response.data);
        setSessionData(response.data);
      }
      catch (error){
        setError(error);
      }
    };
  
    fetchData();
  }, [sessionId]); 
  
  if(error){
    console.log(error.message);
    return <div>Error fetching data: {error.message}</div>;
  }

  if(!sessionData){
    return <div>Loading...</div>;
  }
  const splitLabel = (label) => {
    const parts = label.split(': ');
    return { name: parts[0], value: parts[1] };
  };

  return (
    <div className="main-screen" style={styles.mainScreen}>
      <div className="top-button-container" style={styles.topButtonContainer}>
        <button style={styles.backButton}> 
        <FontAwesomeIcon icon={faLessThan} style = {{color: 'white'}}/>
        </button>
        <button style={styles.topButton} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>
          MULTIPLAYER
        </button>
        <span style={styles.topButton}>/</span>
        <button style={styles.topButton} onMouseOver={(e) => e.target.style.fontWeight = 'bold'} onMouseOut={(e) => e.target.style.fontWeight = 'normal'}>
          SERVER BROWSER
        </button>
        <span style={styles.topButton}>/</span>
      </div>
      <span style={styles.serverInfo}>SERVER INFO</span>
      <div className="scrollable-content" style={styles.scrollableContent}>
        <span style={styles.serverName}>! RC3-BASEMAPS</span>
        <p>
          <img src={ger_flag} alt='Heil Hitler' style={{marginRight: '5px'}}/>
          CONQUEST LARGE - LANCANG DAM - CUSTOM - 60HZ
        </p>
        <p>Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord<br />https://discord.gg/3r5NK4d</p>
        <div className="button-container" style={styles.buttonContainer}>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>JOIN</button>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>SPECTATE</button>
          <button style={styles.button} 
          onMouseOver={(e) => {
            e.target.style.backgroundColor = 'white';
            e.target.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = 'white';}}>JOIN AS COMMANDER</button>
          <button style={styles.Starbutton} 
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = 'white';
            e.currentTarget.style.color = 'black';
          }} 
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = 'white';}}>
              <FontAwesomeIcon icon={faStar} style={{marginRight: '2px'}}/>
              13672
          </button>
        </div>
        <div style={styles.playerInfo}>
          <h2 style={{width: '150px'}}>PLAYERS<br />{sessionData.numPlayers}/64</h2>
          <h2 style={{width: '150px'}}>PING<br />{sessionData.ping}ms</h2>
          <h2 style={{width: '150px'}}>TICKRATE<br />{sessionData.tickrate} Hz</h2>
        </div>
        <div className="serverSettings" style={styles.serverSettings}>
          <div className='settings' style={styles.settings}>
            <span>SETTINGS</span>
            {(sessionData.settingsLabel).map((label, index) => {
              const { name, value } = splitLabel(label);
              return (
                <button
                  key={index}
                  style={styles.settingsButton}
                  onMouseOver={(e) => {
                  if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                       e.currentTarget.style.backgroundColor = 'white';
                       e.currentTarget.style.color = 'black';
                      }
                     }}
                 onMouseOut={(e) => {
                 if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                      }
                    }}>
                  <span style={styles.spanFirst}>{name}</span>
                  <span style={styles.spanSecond}>{value}</span>
                </button>
              );
            })}
          </div>
          <div className='settings' style={styles.settings}>
            <span>ADVANCED SETTINGS</span>
            {(sessionData.advancedLabel).map((label, index) => {
              const { name, value } = splitLabel(label);
              return (
                <button
                  key={index}
                  style={styles.settingsButton}
                  onMouseOver={(e) => {
                      if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                         e.currentTarget.style.backgroundColor = 'white';
                         e.currentTarget.style.color = 'black';
                             }
                         }}
                  onMouseOut={(e) => {
                      if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'white';
                           }
                       }}>
                  <span style={styles.spanFirst}>{name}</span>
                  <span style={styles.spanSecond}>{value}</span>
                </button>
              );
            })}
          </div>
          <div className='settings' style={styles.settings}>
            <span>RULES</span>
            {(sessionData.rulesLabel).map((label, index) => {
              const { name, value } = splitLabel(label);
              return (
                <button
                  key={index}
                  style={styles.settingsButton}
                  onMouseOver={(e) => {
                    if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                          e.currentTarget.style.backgroundColor = 'white';
                          e.currentTarget.style.color = 'black';
                        }
                      }}
                  onMouseOut={(e) => {
                       if (e.target === e.currentTarget || e.target.tagName === 'SPAN') {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'white';
                        }
                      }}>
                  <span style={styles.spanFirst}>{name}</span>
                  <span style={styles.spanSecond}>{value}</span>
                </button>
              );
            })}
            </div>
        </div>
        <div className="placeholders" style={styles.placeholders}>
          <MapRotation/>
        </div>
      </div>
    </div>
  );
};

export default Serverscreen;
