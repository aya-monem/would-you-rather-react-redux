import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import setAuthedUser from '../actions/authedUser'
import Login from './Login'

function Navigation (props){
    
        const { user , dispatch} = props
        const avatar = user.avatarURL
       
        return (
         user ?        
         <div className='nav-container' >
                <Link to='/home' className='link'>Home</Link>
                <Link to='/add' className='link'>New Question</Link>
                <Link to='/leaderboard' className='link'>Leader Board</Link>
                <p>
                    <span>Hello! {user.name}</span>
                    <img src={avatar} className='icon' alt={`${user.id} avatar`}/>
                </p>
                <Link className='signOut link' to='/'
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