import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect  } from 'react-router-dom'
import  handleInitialData from '../actions/shared'
import Login from './Login'
import Navigation from './Navigation'
import DashBoard from './DashBoard'
import AnswerQuestion from './AnswerQuestion'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'
// import Notfound from './Notfound'



class  App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());   
  }
  render (){
    const { authedUser } = this.props;
    //  console.log( authedUser )
    return (
      authedUser === null ? 
        (
        <div>
          <Route  path='/login'> 
              <Login /> 
          </Route >
          <Redirect from='*' to='/login'>
               <Login />
          </Redirect>
          
        </div>
        )
      :
       (
         <div> 
            <Route path='/login'>
                  <Login />
            </Route> 
            
            <Route exact path='/'>
                  <Navigation /> 
                  <DashBoard />
            </Route>
            <Route path='/questions/:id'>
                 <Navigation /> 
                 <AnswerQuestion />
            </Route>
            {/* <Route path='/questions/notfound'> 
                 <Navigation />     
                 <Notfound />
            </Route> */}

            <Route path='/add'>
                  <Navigation /> 
                  <NewPoll />
            </Route>

            <Route path='/leaderboard'>
                  <Navigation /> 
                  <LeaderBoard />
            </Route>
         </div>
        

        

       ) 
  
    );
  } 
}
function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App);
