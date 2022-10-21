console.log(Redux);
// CONSTS
const Withdrow="Withdrow"
const Deposite="Deposite"
const addProduct="addProduct"
const getProduct="getProduct "







// actions

const Whidrow=(amount)=>{
    return{
        type:Withdrow,
        payload: amount
}
    }



const deposite=function(amount){
    return{
        type:Deposite,
        payload:amount 
    }
}
const addProducts=function(products){

return{
    type:addProduct,
    payload:products
}

}
const getProducts=(product)=>{
    return{
        type:getProduct,
        payload:product
    }
}
const fetchProducts= ()=>{
    return async(dispatch)=>{
         const res= await fetch('https://fakestoreapi.com/products')
  const data=await res.json()
  console.log(data);
  dispatch(getProducts(data))
}
    }
   






    // Reducers


const bankReducer=(state=1000,action)=>{
    switch(action.type){
        case Withdrow:
        return state - action.payload;
        case Deposite:
            return state + action.payload

        default:return state
    }
}
const productReducer=(state=[],action )=>{
switch(action.type){
    case getProduct:
        return [...action.payload]
    case addProduct:
        return [...state,action.payload]
        default:return state

}
}
const appReducer=  Redux.combineReducers({
    bank:bankReducer,
    product:productReducer
})
const store=Redux.createStore(appReducer,Redux.applyMiddleware(ReduxThunk))




// dom


 let amountInput=  document.querySelector("#amount")
 let amountValue=     document.querySelector("#value");
 amountValue.innerHTML=store.getState().bank;
document.querySelector("#Withdrow").addEventListener('click',()=>{
    store.dispatch(Whidrow( +amountInput.value));
})
document.querySelector("#Deposite").addEventListener('click',()=>{
    store.dispatch(deposite( +amountInput.value));
})



// subscribe

store.subscribe(() => {
    console.log("CURRNT STATE",store.getState());
    amountValue.innerHTML=store.getState().bank
})



