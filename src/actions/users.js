export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ANSWER_QUESTION_TO_USER = 'ANSWER_QUESTION_TO_USER'


export default function receiveUsers(users){
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function addQuestionToUser({id , author}){
    return {
        type: ADD_QUESTION_TO_USER,
        id ,
        author
    }
}

export function answerQuestionToUser( authedUser , id , answer ){
    return{
        type: ANSWER_QUESTION_TO_USER,
        authedUser,
         id,
        answer
    }
}