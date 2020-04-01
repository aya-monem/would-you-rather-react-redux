import React from 'react'
import {connect} from 'react-redux'
import Question from './Question'

class DashBoard extends React.Component{
    state = {
        unanswered : true
    }

    handleCategory = (value) => {
       this.setState({unanswered : value})       
    }
    render(){
        const { unanswered }= this.state
        const { answeredquestions, unansweredquestions } = this.props
        return(
            <div className='dashboard-container'> 
                      
                <button className={unanswered ?'category-btn active' : 'category-btn'}
                onClick={ e => this.handleCategory(true)} >
                    Unanswered 
                </button>

                <button className={unanswered ? 'category-btn' :'category-btn active'}
                onClick={e => this.handleCategory(false)}>
                    Answered 
                </button>
                {unanswered === true && (
                   <ul  className='questions-list'>
                    { unansweredquestions.map(question => (
                        <li key={question.id} className='question-list-item'>  
                            <Question question={question} unanswered={unanswered}/> 
                        </li>
                    ))}
                    </ul> 
                )}
                
                {unanswered === false && (
                    <ul className='questions-list'>
                    { answeredquestions.map(question => (
                            <li key={question.id} className='question-list-item'> 
                                <Question question={question} unanswered={unanswered}/>    
                            </li>
                        ))}
                    </ul>
                )}
                
                    
            </div>
       
        )
    }
}
function mapStateToProps( { authedUser , questions  } ){
    const questionsArray = Object.values(questions);
    //    getting unanswered questions
    const unansweredquestions = questionsArray.filter(qu => (
        qu.optionOne.votes.indexOf(authedUser) === -1 &&
        qu.optionTwo.votes.indexOf(authedUser) === -1
    )).sort((a,b) => b.timestamp - a.timestamp);
    
        //    getting answered questions
    
    const answeredquestions = questionsArray.filter(qu => (
        qu.optionOne.votes.indexOf(authedUser) > -1 ||
        qu.optionTwo.votes.indexOf(authedUser) > -1
    )).sort((a,b) => b.timestamp - a.timestamp);
    
    return {
        authedUser,
        answeredquestions,
        unansweredquestions,
        // users   
    }
 }
export default connect(mapStateToProps)(DashBoard);