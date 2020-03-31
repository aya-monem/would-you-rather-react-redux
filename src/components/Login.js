import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import setAuthedUser from '../actions/authedUser'

class Login extends React.Component{
    state = {
        value : null,
        disabled : true
    };
    
    handleChange = (e) => { 
        this.setState({
            value: e.target.value,
            disabled : false
        }); 
    }
    
    render(){
        const { users } = this.props;
        const authedUser = this.state.value;
        
        return (     
        <div className='login-container' >
            <div className='login-header' >
               <h3 >Welcome to the Would You Rather App!</h3>
               <p >Please sign in to continue</p>
            </div>
            <img src={require('../logo.jpeg')} 
             alt='logo' 
             className='login-img' />
             <h2>Sign in</h2>
             <form>
                 <select value={authedUser ? authedUser : 'select' } onChange={this.handleChange}>
                    <option  value='select' hidden >Select User...</option>
                    { users.map( user => 
                        <option key={user.id} value={user.id} 
                        style={{backgroundImage : `url(${user.avatarURL})`}}>
                           {user.name}
                        </option>
                         
                       
                    )}
                 </select>
                 
                     <Link  to='/' className='signBtn'
                     disabled={this.state.disabled} 
                     onClick={() => this.props.dispatch(setAuthedUser(authedUser)) }>
                          Sign in 
                     </Link>
               
             </form>
        </div>
        )
    }
}
function mapStateToProps( {users  } ){
   return {
       users : Object.values(users)
   }
}

export default connect(mapStateToProps)(Login);