import React, { useEffect, useState } from 'react'; 
import Card from "../../components/card/card";
import './Home.css'
const Home = () => { 
  const [surahs, setSurahs] = useState([]); 
  useEffect(() => { fetch('https://quranapi.pages.dev/api/surah.json') 
    .then(result => result.json()) 
    .then(data => setSurahs(data))
    .catch((error) => console.log("error is : ",error)) ;
   }, []);  

    return ( 
      <>
      <div className='heading'><h1>📖 List of Surahs</h1> </div>
      
       <div className='home'>  
      { surahs.map((surah, idx) => ( 
        <Card key={idx} surah={surah} id={idx} />))} 
     </div>
    </>
     ); 
    }; 

export default Home;