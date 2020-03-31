import { saveQuestion , saveQuestionAnswer } from '../utilis/api'
import {addQuestionToUser , answerQuestionToUser } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION_TO_QUESTIONS = 'ADD_QUESTION_TO_QUESTIONS'
export const ANSWER_QUSTION_TO_QUESTION = 'ANSWER_QUSTION_TO_QUESTION'



export default function receiveQuestions(questions){
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

 function addQuestionToQuestions(question){
    return {
        type: ADD_QUESTION_TO_QUESTIONS,
        question
    }
}

function answerQuestionToQuestion( authedUser , id , answer ){
    return{
        type : ANSWER_QUSTION_TO_QUESTION,
        authedUser,
        id,
        answer,
    }
}
   

export function handleAddQuestion({optionOne , optionTwo , authedUser}){
    return dispatch => {
    
        const questionInfo = {
            optionOneText : optionOne ,
            optionTwoText : optionTwo ,
            author : authedUser,
        }
        // console.log(questionInfo)
        return saveQuestion(questionInfo)
            .then(question => {
                dispatch(addQuestionToQuestions(question))
                dispatch(addQuestionToUser(question))
        });       
 }
}

export function handleAnswerQuestion({ authedUser, qid, answer }){
    return dispatch =>{

        return saveQuestionAnswer({ authedUser, qid, answer })
           .then(() => {
               console.log( { authedUser, qid, answer } )
                dispatch(answerQuestionToQuestion({ authedUser, qid, answer }))
                dispatch(answerQuestionToUser({ authedUser, qid, answer }))
      })
    }
}
