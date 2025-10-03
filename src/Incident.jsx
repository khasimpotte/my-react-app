// import { useState } from 'react';
import styles from './css/Incident.module.css'


// function Incident(props){
function Incident({incident,onDelete}){
    const {incident_id,title,status,priority}=incident;

    

    return(
        // <>
        //     <div>
        //         <p>{props.incident.incident_id}</p>
        //         <p>{props.incident.title}</p>
        //         <p>{props.incident.status}</p>
        //         <p>{props.incident.priority}</p>
        //     </div>
        // </>
        
        <>
            <div className={styles.box}>
                <ul className={styles.list}>
                    <li>ID : {incident_id}</li>
                    <li>Title : {title}</li>
                    <li>Status : {status}</li>
                    <li>Priority : {priority}</li>
                    <button onClick={onDelete} type="button">Delete</button>
                </ul>
                
            </div>
        </>
    )
}
export default Incident