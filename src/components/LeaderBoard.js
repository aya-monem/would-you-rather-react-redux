import React from 'react'
import {connect} from 'react-redux'

function LeaderBoard(props){
       const { allData } = props
        return(
           <ul className='leaderBoard-container'>
               {allData.map(user => (
                   <li key={user.id}>
                       <div className='user-container'>
                           <img src={user.avatar} alt={`avatar of${user.name}`} className="question-avatar" />
                            <div className='middle'>
                                <h3>{user.name}</h3> <hr />
                                <p>Answered Questions <span>{user.noOfAnswers}</span></p>
                                <p>Created Questions <span>{user.noOfQuestions}</span></p>
                            </div> 
                            <div className="score">
                                <p>Score</p><hr/><br/>
                                <span>{user.noOfAnswers + user.noOfQuestions}</span>
                            </div>
                       </div>
                   </li>
               ))}
           </ul>   
        )
    
}
function mapStateToProps({users}){
    const usersArray = Object.values(users)
   
    const allData = usersArray.map(user => ({
        noOfQuestions : user.questions.length,
        id : user.id,
        name : user.name,
        avatar : user.avatarURL,
        noOfAnswers : Object.values(user.answers).length,
    })
    ).sort((a,b) => (b.noOfAnswers + b.noOfQuestions) - (a.noOfAnswers + a.noOfQuestions));

return {
    allData
}
}
export default connect(mapStateToProps)(LeaderBoard);