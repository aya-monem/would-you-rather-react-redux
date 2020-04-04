import React from 'react'
import { connect } from 'react-redux'
import { Route , Switch} from 'react-router-dom'
import  handleInitialData from '../actions/shared'
import Login from './Login'
import Navigation from './Navigation'
import DashBoard from './DashBoard'
import QuestionPage from './QuestionPage'
import NewPoll from './NewPoll'
import LeaderBoard from './LeaderBoard'
import Notfound from './Notfound'



class  App extends React.Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData());   
  }
  render (){
    const { authedUser} = this.props;
    
    return (
       authedUser === null ?
       <Switch>
          <Route exact path='/'> <Login /> </Route>
          <Route  path='/*' ><Notfound /></Route>
       </Switch> 
       :
        <div>
                <Route exact path='/'>
                      <Login />
                </Route> 
             
                <Route  path='/home'>
                      <Navigation /> 
                      <DashBoard />
                </Route>
                <Route path='/questions/:id'>
                    <Navigation /> 
                    <QuestionPage />
                </Route>
              
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
  } 
}
function mapStateToProps({authedUser}){
  return{
    authedUser
  }
}

export default connect(mapStateToProps)(App);
