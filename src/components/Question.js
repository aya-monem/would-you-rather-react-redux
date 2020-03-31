import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'


class Question extends React.Component{
    render(){
        const  {users , question , unanswered } = this.props
        // console.log(authedUser);
        return(
             <div>
                <h4 className="question-title">{users[question.author].name} asks:</h4>
                <hr />
                <div className='question-body'>
                    <img src={users[question.author].avatarURL} alt='avatar' className='question-avatar'/>
                    <div className='question-details'>
                        <p className='question-text' >
                            <span style={{fontWeight: 'bold'}}>Would you rather </span> <br/>
                            <span>{question.optionOne.text}</span> <br/>
                            <span><b>OR </b> {question.optionTwo.text}</span>  <br/>
                        </p>

                     {/* {question.id} */}
                         {( question.id && unanswered === true )   && 
                            <Link to={`/questions/${question.id}`} className='view-poll-btn'>
                                  Answer Poll
                             </Link>
    
                            }
                         {( question.id && unanswered === false)   && 
                            <Link to={`/questions/${question.id}`} className='view-poll-btn'>
                                  View Poll
                             </Link>
                            } 
                         {( question.id === undefined )   && 
                            <Link to='/question/notfound' />
                                    
                        } 
                       
                    </div>
                </div>
             </div>
        )
    }
}

function mapStateToProps({users , authedUser } , {question , unanswered}){
    return{
      users,
      authedUser,
      question,
      unanswered
    }
}

export default connect(mapStateToProps)(Question);