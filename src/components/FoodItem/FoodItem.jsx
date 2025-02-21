import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'


const FoodItem = ({id,name,price,description,image}) => {

  const [itemCount,setItemCount] = useState(0) 

  return (
    <div className='food-item'>
        <div className='food-img'>
            <img className='food-item-img' src={image}/>
            {!itemCount
                ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white}/>
                :<div className='food-item-container'>
                   <img onClick={()=>setItemCount(prev=>prev-1)}src={assets.remove_icon_red} alt="" /> 
                   <p>{itemCount}</p>
                   <img onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_green}/>
                </div>
            }
        </div>
        <div className='food-info'>
            <div className="food-rating">
                <p>{name}</p>
                <img src={assets.rating_starts}/>
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
