import axios from "axios";

const getProductItems = async() =>{


  const promise = await new Promise(async(resolve,  reject)=>{
    const res:any = await axios.get('https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json');

    if(res.status===200){
     return resolve(res.data);
    }else{
     return reject('error fetching products');
    }
  });

  return promise;
}

export default getProductItems;