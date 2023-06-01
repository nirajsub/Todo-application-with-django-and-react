import React from 'react'
import HomeData from '../components/HomeData'
import star from '../images/star.png'

const Home = () => {
  return (
    <div>
    <h1 className='font-bold text-blue-400 text-3xl flex align-middle justify-center'>THE SHOP</h1>
    <div className='home-container'>
      {HomeData.map(item => {
        return (
          <SingleCard 
          key={item.id}
          {...item}
          />
        )}
        )}
    </div>
    </div>
  )
}

function SingleCard({image, rating, country, title, des, oponspot, location}) {
  let badgeText
  if (oponspot === 0) {
    badgeText = "SOLD OUT"
  } else if (location === "online"){
    badgeText = "ONLINE"
  }
  return (
    <div className="card">
        {badgeText && <div className="card-badge "><p>{badgeText}</p></div>}
        <img src = {image} className="character h-96 w-48" alt='img'/>
        <div className="rating-comp">
          <img src = {star} className="star-logo" alt='imgs'/>
          <div className='flex justify-center'>
            <p className='font-serif'>{rating}.</p>
            <p className='font-bold'>{country}</p>
          </div>
        </div>
          <h6 className='text-lg font-bold'>{title}</h6>
          <p className=' text-slate-600 text-xs'>{des}</p>
    </div>
)
}

export default Home
