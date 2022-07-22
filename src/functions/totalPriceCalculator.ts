
const totalPriceCalculator = (cartItems:Array<any>):number => { 
    let total:number = 0;
    total = cartItems.reduce((acc, curr)=>acc=acc+((curr.productQuantitySet)*curr.productPrice),0);
    return total;
}

export default totalPriceCalculator;