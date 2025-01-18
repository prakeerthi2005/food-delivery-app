import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";

const Cards = ({ items }) => {
    const [heart, setHeart] = useState(false);
    const handleHeartClick=()=>{
        setHeart(!heart)
    }
    const {_id,name,image,price,recipe,category}=items;
    const user=useContext(AuthContext);
    console.log("user",user);
   const handleAddToCart=(items)=>{
      const cartItem={menuItemId:_id,name,quantity:1,image,price,email:user.email};
      console.log(cartItem)
       
   }
   

  return (
<div className="card w-80 bg-base-100  mx-auto shadow-xl">
<div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${heart ? 'text-rose-500' : 'text-white'}`} onClick={handleHeartClick}>
            <FaHeart></FaHeart>
        </div>
      <Link to={`/menu/${items._id}`}>
        <figure>
          <img src={items.image} alt="Shoes"
          className="hover:scale-75 transition-all duration-200 md:h-60 " />
        </figure>
      </Link>

      <div className="card-body">
        <Link to={`/menu/${items._id}`}>
        
        <h2 className="card-title">{items.name}</h2>
        </Link>
        <p>Description of the item</p>
        <div className="card-actions justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-red">$</span>
            {items.price}
            
          </h5>
          <button onClick={() => handleAddToCart(items)} className="btn bg-green text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
