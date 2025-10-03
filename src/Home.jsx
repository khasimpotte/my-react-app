import styles from './css/Home.module.css'
import IncidentList from "./IncidentList";
import Welcome from "./Welcome";
import { useState ,useReducer, useContext } from 'react';

import { ThemeContext } from "./ThemeContext";

import data from './assets/incidents.json'

function incidentReducer(state,action){
    switch(action.type){
        case 'add':{
            return [...state,action.payload]
        }
        case 'delete':{
            return state.filter(incident=>incident.incident_id !== action.payload)
        }

    }
}

function Home(){
    // const userName="Khasim";
    const date=new Date();

    const user={prefix:"Mr.",firstName:"Khasim",lastName:"Potte"};


    const [PageContent,setPageContent] =useState('Home');
    function handleClick(e){
        setPageContent(e.target.innerText);
    }


    // const [incidents,setIncidents]=useState(data)
    const [incidents, dispatch] = useReducer(incidentReducer, data);


    function handleDelete(id){
        // setIncidents(incidents=>incidents.filter(incident=>incident.incident_id!==id));
        dispatch({type:'delete',payload:id})
    }
    
   
    function addInc(newInc) {
        // setIncidents((incidents) => [...incidents, newInc]);
        dispatch({type:'add',payload:newInc})
    }


     const { darkmode, handleToggleDarkMode } = useContext(ThemeContext);

    return(
        //<h2>Hi this is Khasim...</h2>
        // <>
        //     <header className={styles.header}>
        //         <span className={styles.text}>Welcome {userName}..!</span>
        //         <h3>Today's date is : <h4 className={styles.date}>{date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</h4></h3>
        //     </header>
        // </>


        <>
            <header className={styles.header}>
                <span>Welcome {user.prefix} {user.firstName} {user.lastName}</span>
                <span>Time since last incident : {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</span>
                <nav>
                    <ul className={styles.list}>
                        <li className={styles.listItem}><a className={styles.link} onClick={handleClick} href='#'>Home</a></li>
                        <li className={styles.listItem}><a className={styles.link} onClick={handleClick} href='#'>Incidents</a></li>
                    </ul>
                    <button onClick={handleToggleDarkMode}>{darkmode === 'light' ? 'Dark' : 'Light'} Mode</button>
                </nav>
            </header>
            {/* <h1>Welcome..!</h1> */}
            {/* <IncidentList/> */}
            {PageContent=='Home'?<Welcome/>:<IncidentList incidents={incidents} onDelete={handleDelete} addInc={addInc} />}
        </>
    )
}

export default Home