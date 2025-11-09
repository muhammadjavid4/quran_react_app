import React from 'react'
import './Card.css'
import { useNavigate } from 'react-router-dom';

const Card = ({surah,id}) => {
  const navigate = useNavigate();
  function handleclick(){
    console.log(id);
      navigate(`/surah/${id}`)
  }
  return (
    <div className='card' onClick={handleclick}>
    <div className='surahname'><h6>{surah.surahName}</h6></div>
    <h6 className='suraharabicname'>{surah.surahNameArabic}</h6>
    <h6 className='suraharabictran'>{surah.surahNameArabicLong}</h6>
    <h6 className='surahtranslation'>{surah.surahNameTranslation}</h6>
    <div className='ayat'>
    <h6>{surah.revelationPlace}</h6>
    <h6>{surah.totalAyah}</h6>
    </div>
    </div>
   
  )
}

export default Card;
