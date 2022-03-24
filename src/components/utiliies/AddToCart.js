const AddToCart =(id)=>{
    // localStorage.setItem()

    // in this way key name will be the country name and value will be the total cart 
   /*  const quantity = localStorage.getItem(id)
    if(quantity){
        console.log('exist');
        const newQuantity =parseInt( quantity) +1 ;
        localStorage.setItem(id,newQuantity);
    }
    else{
        console.log('new Item');
        localStorage.setItem(id,1);
    } */
    let shoppingCart;
    // get the shopping cart 
    const storedCart = localStorage.getItem('Shopping-Cart')
    if(storedCart){
        shoppingCart=JSON.parse(storedCart)
    }else{
        shoppingCart ={};
    }
    // in this way as like as other browser local storage type. object type 
    const quantity = shoppingCart[id];
    if (quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id]=newQuantity;
    }else{
        shoppingCart[id]=1;
    }
    localStorage.setItem('Shopping-Cart',JSON.stringify(shoppingCart));
  }
  const RemoveFromDB =(id)=>{
      console.log("remove",id);
      const storedCart = localStorage.getItem('Shopping-Cart')
      if(storedCart){
        const shoppingCart = JSON.parse(storedCart)
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('Shopping-Cart',JSON.stringify(shoppingCart));
        }
      }
  }


  export  {AddToCart ,RemoveFromDB  };