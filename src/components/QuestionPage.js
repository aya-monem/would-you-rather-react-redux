import React from 'react'
import {connect} from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import ProgressBar from 'react-bootstrap/ProgressBar'
import {handleAnswerQuestion} from '../actions/questions'

class QuestionPage extends React.Component{
    state = {
        answer : '',
        cantSubmit : true
    }
    getAnswerQuestion = (text) => {
        this.setState({ 
            answer : text,
            cantSubmit : false
        })
    }
    render(){
         const {users , question , answered , authedUser , qid } = this.props;
         const {answer , cantSubmit} = this.state;
         const votes1 = question.optionOne.votes.length; 
         const votes2 = question.optionTwo.votes.length;
         const total = votes1 + votes2;
         const percentage1 = ((votes1/total)*100).toFixed(1) ; 
         const percentage2 = ((votes2/total)*100).toFixed(1) ;
         const userVote = users[authedUser].answers[qid];
         
        return(
            answered === false ? (
            <div className='question-contaner question-list-item'>
                <h4 className="question-title">{users[question.author].name} asks:</h4>
                <hr />
                <div className='question-body'>
                    <img src={users[question.author].avatarURL} alt='avatar' className='question-avatar'/>
                    <div className='question-details'>
                        <div className='question-text' >
                            <h2>Would you rather </h2> 

                            <label htmlFor="optionOne">
                            <input type="radio" id='optionOne' name='answer'
                             value={question.optionOne.text}  
                             onChange={ (e) => this.getAnswerQuestion('optionOne')} />
                                {question.optionOne.text}  
                            </label><br /> 
 
                            <label htmlFor="optionTwo">
                            <input type="radio" id='optionTwo' name='answer'
                               value={question.optionTwo.text} 
                              onChange={(e) => this.getAnswerQuestion('optionTwo')} />
                                 {question.optionTwo.text}
                            </label>
                        </div>
                        <button  className='signBtn' type='button'
                        onClick = {(e) => this.props.dispatch(handleAnswerQuestion({authedUser , qid , answer}))}
                         disabled={cantSubmit}>
                             Submit
                        </button>
                    </div>
                </div>
            </div> ) 
            :
            (
                
            <div className='question-contaner question-list-item'>
                <h3 className="question-title"> Asked by: {users[question.author].name}</h3>
                <hr />
                <div className='question-body'>
                    <img src={users[question.author].avatarURL} alt='avatar' className='question-avatar'/>
                    <div className='question-details'>
                        <div className='question-text' >
                            <h2>Results </h2> 
                            <div className={(votes1>=votes2) ? 'option blue' : 'option'}>
                                <span className='vote-logo' 
                                    style={userVote ==='optionOne'? {display:'block'}: {display:'none'}}>
                                        your vote
                                </span>
                                <p className='option-text'>
                                    would you rather {question.optionOne.text} ?
                                </p>
                                <ProgressBar now={percentage1} label={`${percentage1}%`} />
                                 <p > {votes1} out of {total} </p>
                            </div>

                            <div className={(votes2>=votes1) ? 'option blue' : 'option'}>
                               <span className='vote-logo'
                                    style={userVote ==='optionTwo'? {display:'block'}: {display:'none'}}>
                                        your vote
                                </span>
                               <p className='option-text'>
                                    would you rather {question.optionTwo.text} ?
                               </p>
                               <ProgressBar now={percentage2} label={`${percentage2}%`} />
                               <p > {votes2} out of {total} </p>
                            </div >

                        </div>
                        <Link to='/' className='signBtn backBtn'>
                             Back
                        </Link>
                    </div>
                </div>
            </div> 
            )

        )   
    }
}
function mapStateToProps( {users , questions  ,authedUser } , props ){
    const qid = props.match.params.id;
    const question = questions[qid];
    const answered = question.optionOne.votes.indexOf(authedUser) > -1 ||
                      question.optionTwo.votes.indexOf(authedUser) > -1
    
    return{
        users,
        question,
        authedUser,
        qid,
        answered
    }  
    
}
export default withRouter(connect(mapStateToProps)(QuestionPage));