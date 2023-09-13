const getStoredCard = ()=>{
    const storedCardString = localStorage.getItem('cart')
    if(storedCardString){
        return JSON.parse(storedCardString)
    }
    return [];
}

const saceCartTols = cart=>{
    const cardStringified =JSON.stringify(cart);
    localStorage.setItem('cart', cardStringified);
}


const addTols = id =>{
    const cart =getStoredCard();
    cart.push(id);
    saceCartTols(cart);
}
export{addTols,getStoredCard};