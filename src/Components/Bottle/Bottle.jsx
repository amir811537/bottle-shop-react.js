import './Bottle.css'
const Bottle = ({bottle,handelAbbtoCart}) => {
const {name, img, price}=bottle;
console.log(bottle)

    return (
        <div className="bottle">
            <img src={img} alt="" />
            <h3>Bottle: {name}</h3>
            <p>price: ${price}</p>
<button onClick={()=>handelAbbtoCart(bottle)}>purchase</button>
        </div>
    );
};

export default Bottle;