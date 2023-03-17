
export const initialState = {
  basket: [],
  user:null
};
export const getBasketTotal = (basket) => {
  return basket?.reduce((amount,item)=> item.price + amount,0)
};

function reducer(state,action){
  console.log(action);
  switch(action.type){
     case 'SET_USER':
      return {
        ...state,
        user:action.user
      }
     case 'ADD_TO_BASKET':
        //LOGIC FOR ADDING ITEM TO THE BASKET
        return {
          ...state,
          basket:[...state.basket,action.item]
        };
     case 'REMOVE_FROM_BASKET':
      //LOGIC FOR REMOVING ITEM FROM THE BASKET
      
      //we cloned the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex((basketItem) => basketItem.id===action.id);
      if(index>=0){
        //item exists in basket,remove it ..
           newBasket.splice(index,1);

      }else{
         console.warn("can't remove the product");
      }
         return {
          ...state,
          basket:newBasket
        };
      default:
        return {state};
  }
}
 export default reducer;
