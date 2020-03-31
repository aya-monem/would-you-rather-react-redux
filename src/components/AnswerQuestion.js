import React from 'react'
import {connect} from 'react-redux'
import { withRouter , Link } from 'react-router-dom'

class AnswerQuestion extends React.Component{
    render(){
         const {users , question } = this.props;
         console.log(question);
         console.log(this.props.match)
        return(
            <div className='question-list-item'>
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
                        <Link to='/' >Submit</Link>
                    </div>
                </div>
            </div>
        )   
    }
}
function mapStateToProps( {users , questions  ,authedUser } , props ){
    const qid = props.match.params.id;
    const question = questions[qid]
    return{
        users,
        question,
        authedUser,
          qid 
    }  
    
}
export default withRouter(connect(mapStateToProps)(AnswerQuestion));