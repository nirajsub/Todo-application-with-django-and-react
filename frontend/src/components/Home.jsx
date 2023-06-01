import React from 'react'
import HomeData from './HomeData'
import Hero from './Hero'

const Home = () => {
  return (
    <div>
    <Hero />
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
        <img src = "./images/star.png" className="star-logo" alt='imgs'/>
        <p>{rating}{country}</p>
        </div>
        <h6>{title}</h6>
        <p>{des}</p>
    </div>
)
}

// function singleCard({image, rating, country, title, des, oponspot, location}) {
//   let badgeText
//   if (oponspot === 0) {
//     badgeText = "SOLD OUT"
//   } else if (location === "online"){
//     badgeText = "ONLINE"
//   }

//   return (
//     <div className="card">
//         {badgeText && <div className="card-badge "><p>{badgeText}</p></div>}
//         <img src = {image} className="character" alt='img'/>
//         <div className="rating-comp">
//         <img src = "./images/star.png" className="star-logo" alt='imgs'/>
//         <p>{rating}{country}</p>
//         </div>
//         <h6>{title}</h6>
//         <p>{des}</p>
//     </div>
// )
// }
export default Home
