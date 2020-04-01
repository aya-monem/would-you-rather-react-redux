import {RECEIVE_QUESTIONS ,
     ADD_QUESTION_TO_QUESTIONS ,
     ANSWER_QUSTION_TO_QUESTION } from '../actions/questions'


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

        case ANSWER_QUSTION_TO_QUESTION:
             const { authedUser , qid , answer } = action
             console.log(action)
           return {
                ...state,
                [qid]:{
                    ...state[qid],
                    [answer] : {
                        ...state[qid][answer],
                        votes: state[qid][answer].votes.concat([authedUser])
                    }
                }
           }

       default:
           return state
   }
}