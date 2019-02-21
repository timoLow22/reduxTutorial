//this is the reducer page where you set situation that trigger the functions in the actions page to run
//You must import then types of actions you have from your types file
import { INCREMENT, DECREMENT } from '../actions/types';

//Then, you will have to create a state like the code below, where I create a state called initialNumber. This is like your default state 
const initialNumber = {
    number: 0
}


//Lets say in the incrementNum function, if you recall, you can see that the type we are sending is INCREMENT

//So, the code below is just manipulating the 'type' varible. The 'type' is used to determine what should be done to the datas you set
//We normally use switch cases to make things easier heh
export default (state = initialNumber, action) => {
    switch(action.type){
        case INCREMENT:
            return {...state, number: action.payload};
        case DECREMENT:
            return{...state, number: action.payload};
        default:
            return state;
    }
}