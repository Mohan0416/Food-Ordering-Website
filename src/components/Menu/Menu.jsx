import React from 'react'
import './Menu.css'
import { menu_list } from '../../assets/assets'
const Menu = ({category,setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
     <h1>Explore our menu</h1> 
     <p className='exp-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae sed voluptatibus aspernatur ipsum cupiditate ipsa</p>
     <div className="exp-list">
        {menu_list.map((item,index)=>{
            return(
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='exp-item'>
                    <img className={category===item.menu_name?"active":""}src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
     </div>
     <hr />
    </div>
  )
}

export default Menu
