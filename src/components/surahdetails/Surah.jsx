import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Surah.css';

const Surah = () => {
  const { id } = useParams();
  const [surah, setSurah] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showtranslation, setShowtranslation] = useState(false);
  const [ayahs,setAyahs] = useState([])
  const [showAyahTranslation,setShowAyahTranslation] = useState({})

  useEffect(() => {
    fetch(`https://quranapi.pages.dev/api/${Number(id) + 1}.json`)
      .then(result => result.json())
      .then(data => {
        setSurah(data);
        setLoading(false);
      })
      .catch(error => {
        console.log("error is:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if(surah != null && !loading) {
      const mergedAyahs = surah.english.map((engAyah, index) => ({
        english: engAyah,
        arabic: surah.arabic1[index] || "",
      }));
      setAyahs(mergedAyahs)

      for(let i = 0 ; i < surah.totalAyah;i++){
        setShowAyahTranslation((prevState) => {
          return {
            ...prevState,
            [i] : false
          }
        })
      }
    }
  },[id,surah])

  const handleAyahClick = (ayatNumber) => {
    setShowAyahTranslation((prevState) => {
      return {
        ...prevState,
        [ayatNumber] : !prevState[ayatNumber]
      }
    })


  }
  
  console.log(showAyahTranslation)

  if (loading){
    return <p style={{ color: "green", fontWeight: 600 }}>Data is loading please wait...</p>;
  }
  if (!surah) {
    return <p style={{ color: "red" }}>Surah not found</p>;
  }
  return (
    <div>
      <div className='mainheading'>
        <div className='surahheading'>
          <h1>{surah.surahName}</h1>
          <h3>{surah.surahNameTranslation}</h3>
        </div>
      </div>

      <div className='btndiv'>
        <button className='btn' onClick={() => setShowtranslation(!showtranslation)}>
          {showtranslation ? 'See Original' : 'See Translation'}
        </button>
      </div>

      <div className='mainpartsurah'>
        <div className='surahmainhead'>
          <div className='surahpart'>
            <ul className='surahlist'>
              {(ayahs).map((ayat, idx) => (
                <li key={idx} className="ayat-item"
                  style={{
                    direction: showtranslation || showAyahTranslation[idx]? "ltr" : "rtl",
                    textAlign: showtranslation || showAyahTranslation[idx]? "left" : "right",
                  }} >
                  <span className='ayat-text'>{showtranslation || showAyahTranslation[idx] ? ayat.english : ayat.arabic}</span>
                  <button className='translatebtn' onClick={() => handleAyahClick(idx)}>click</button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Surah;