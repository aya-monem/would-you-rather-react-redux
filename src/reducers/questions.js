import {RECEIVE_QUESTIONS , ADD_QUESTION_TO_QUESTIONS } from '../actions/questions'


export default function questions( state = {} , action){
   switch( action.type ){
      case RECEIVE_QUESTIONS :
          return {
              ...state,
              ...action.questions
          }

       case  ADD_QUESTION_TO_QUESTIONS:
           const {question } = action
          
           return {
               ...state,
               [question.id] : question,

        }

       default:
           return state
   }
}