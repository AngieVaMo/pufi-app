import axios from 'axios';

export const SUBSCRIPTION = 'SUBSCRIPTION';

export const subscriptionAction = (payload)=>{
    return async (dispatch) => {
        try {
           const response = await axios.post('https://formspree.io/f/mgeqyeaw', payload)
           return dispatch({
            type: SUBSCRIPTION, 
            payload: response}) 

        } catch (error) {
            console.log(error)
        }
    }
};