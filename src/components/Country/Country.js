import React from 'react';
import { AddToCart, RemoveFromDB } from '../utiliies/AddToCart';


const Country=(props)=>{
  
  const {name,area,population,flags} = props.country;
  // console.log(area)
   const AddToCartdb= (id)=>{
     AddToCart (id);
   };
   const RemoveDb =(id)=>{
     RemoveFromDB(id);
   }
    return(

        // declaring data inside component and get them with props 
        <div className='card'>
          <h1>Name :{name.common} </h1>
          <img src={flags.png} alt="" />
          <h1>Population :{population} </h1>
          <p>{area}</p>
          <button onClick={()=>AddToCartdb(name.common)} >Add To Cart</button>
          <button onClick={()=>RemoveDb(name.common)}>Remove</button>
        </div>
    )
  }

export default Country;