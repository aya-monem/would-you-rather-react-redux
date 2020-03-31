import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import setAuthedUser from '../actions/authedUser'
import Login from './Login'
// import DashBoard from './DashBoard'
// import NewPoll from './NewPoll'
// import LeaderBoard from './LeaderBoard'

 
function Navigation (props){
    
        const { user , dispatch} = props
        const avatar = user.avatarURL
       
        return (
         user ?        
         <div className='nav-container' >
                <Link to='/' className='link'>Home</Link>
                <Link to='/add' className='link'>New Question</Link>
                <Link to='/leaderboard' className='link'>Leader Board</Link>
                <p>
                    <span>Hello! {user.name}</span>
                    <img src={avatar} className='icon' alt={`${user.id} avatar`}/>
                </p>
                <Link className='signOut link' to='/login'
                    onClick={() => dispatch(setAuthedUser(null)) }>
                    Sign Out
                </Link>
                <hr />
          </div>
        
          :
          <Login />
        )
    }

function mapStateToProps({ authedUser, users , dispatch } ){
    const user = authedUser ? users[authedUser] : null
    return {
       user,
       dispatch
   }
}
export default connect(mapStateToProps)(Navigation) ;