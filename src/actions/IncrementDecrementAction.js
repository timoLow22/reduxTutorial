//always remember to import the types. Be it in any actions page or reducers page 
import { INCREMENT, DECREMENT } from './types';

//Below are the functions you will need to create to handle the stuff in your redux state
//You can call these functions when you handle a onPress action or onTextChange on your pages

//the functions skeleton is like below. It only needs to return 2 things, type and payload. 
export const incrementNum = (number) => {
    return{
        type: INCREMENT,
        payload: number
    }
}

export const decrementNum = (number) =>{
    return{
        type: DECREMENT,
        payload: number
    }
}