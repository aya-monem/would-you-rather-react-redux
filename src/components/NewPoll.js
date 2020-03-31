import React from 'react'
import {connect} from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { Redirect } from 'react-router-dom'

class NewPoll extends React.Component{
    state = {
        tohome : false,
        optionOne : '',
        optionTwo : ''
    }
    getOptionOne = (e) => {
        e.preventDefault();
        this.setState({
             "optionOne" : e.target.value
        }); 
        
    }
    getOptionTwo = (e) => {
        this.setState({
             "optionTwo"  : e.target.value
        })
        
    }
    handleSubmitPoll = () => {
        const {optionOne , optionTwo } = this.state;
        const {authedUser} = this.props
        console.log({optionOne , optionTwo , authedUser})
        this.props.dispatch(handleAddQuestion( {optionOne , optionTwo , authedUser}));
        
        this.setState({
              tohome : true
        });
       
                      
    }
    render(){
        const {optionOne , optionTwo } = this.state;
        // const {authedUser} = this.props
        return(
           this.state.tohome === true ? (
                <Redirect  to='/' />
            ) : (
                  <div className='newPoll-container'>
                        <h1>Create New Question </h1> 
                        <hr /> 
                        <p>Complete the question:</p>  
                        <h3>Would you rather...</h3>
                        <input placeholder='Enter Option One Here'
                        onChange ={this.getOptionOne} 
                        value={this.state.optionOne}
                            name='optionOne' >
                        </input>
                        <h4>OR</h4>
                        <input placeholder='Enter Option Two Here'
                        onChange ={this.getOptionTwo} 
                        value={this.state.optionTwo}
                        name='optionTwo'
                        >
                        </input>
                        <button type='button' disabled={optionOne === '' || optionTwo === ''}
                        onClick={this.handleSubmitPoll}>
                            Submit
                        </button>
                  </div>
            )
            
            
        )
    }
}
function mapStateToProps({authedUser}){
 return{
     authedUser
 }
}
export default connect(mapStateToProps)(NewPoll);