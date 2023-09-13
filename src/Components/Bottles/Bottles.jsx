import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addTols, getStoredCard } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
const[bottles,setBottles]=useState([]);
const [cart, setCart]=useState([]);

useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data => setBottles(data))
},[])
 useEffect(()=>{
    console.log('called the useeffet',bottles.length)
    if(bottles.length>0){
        const storedCart=  getStoredCard();
        console.log(storedCart,bottles);

const saveCart =[];
for(const id of storedCart){
    console.log(id);
    const bottle = bottles.find(bottle=>bottle.id === id);
    if (bottle){
        saveCart.push(bottle)
    }
}
console.log('save cart', saveCart)
setCart(saveCart);


    }

 },[bottles])

const handelAbbtoCart=bottle=>{
  const newCart=[...cart,bottle];
  setCart(newCart)
  addTols(bottle.id)
}

    return (
        <div>
            <h2>Bottles Avaiable {bottles.length}</h2>
            <Cart cart={cart}></Cart>





         <div className="bottle-container">

         {
            bottles.map(bottle => <Bottle key={bottle.id} bottle={bottle} handelAbbtoCart={handelAbbtoCart} >

                    


            </Bottle>)
           }

         </div>
        </div>
    );
};

export default Bottles;