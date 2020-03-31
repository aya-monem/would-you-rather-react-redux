import {getInitialData}  from '../utilis/api'
import  receiveUsers  from './users'
import  receiveQuestions  from './questions'
// import  setAuthedUser  from './authedUser'

//  const AUTHED_USER_ID = 'sarahedo';

export default function handleInitialData(){
    return dispatch => {
        
        return getInitialData()
        .then( ({users , questions}) => {
            dispatch(receiveUsers(users))
            dispatch(receiveQuestions(questions))
            // dispatch(setAuthedUser(AUTHED_USER_ID))
        });
    }

}