import { useEffect, useState } from "react";


function Welcome(){

    const [joke, setJoke] = useState();

    useEffect(()=>{
        const controller=new AbortController();
        const signal=controller.signal;

        async function fetchData(){
            let results=await fetch('https://api.chucknorris.io/jokes/random',{signal});
            let parsedResponse=await results.json();
            setJoke(parsedResponse.value);
        }
        fetchData();
        return ()=>{controller.abort();}
    },[]);
    return(
        <>
            <h2>Welcome..!</h2>
            <p>{joke}</p>
        </>
    )
}

export default Welcome