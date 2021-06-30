import React, { Component } from 'react'
import { connect  } from 'react-redux'
import * as actions from '../store/actions/actioncreators'

 class Add_Todo extends Component {

  constructor(){
    super()
    this.state={
      title:'',
      desc:''
    }
  }
  
  render() {
    const Add_todo=(e,title)=>{
      e.preventDefault();
      this.props.add(this.state.title,this.state.desc)
    }
    const handleChange = (e) =>{
     let name= e.target.name
     let value= e.target.value
     this.setState({[name]:value})
    }
    return (
      <div className="container mt-3 ">
        
        <form >
        <div ></div>
        <div className="form-group row justify-content-center mb-3 ">
       
          <input className="col-6 col-md-4 border border-primary rounded-left" type="text" placeholder="Add a task here ..." onChange={handleChange} name="title"></input>
        
          <button className="btn-primary   border border-primary col-3 col-md-2"   onClick={Add_todo}><i className="fa fa-plus"></i></button>
          </div>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=>{
  return{
    add:(title,desc)=> dispatch(actions.add_todo(title,desc))
  }
}
export default connect(null,mapDispatchToProps)(Add_Todo);