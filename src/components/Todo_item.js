import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actions from '../store/actions/actioncreators'

 class Todo_item extends Component {
  constructor(){
    super()
    this.state={
      title:'',
      
      disabled:true};
  }


  

  render() {

    const handleRemove= (e )=>{
      e.preventDefault();
      this.props.onRemove(this.props.index)
    }
    
    const editElement= ()=>{

      if(this.state.disabled){
        this.setState({disabled:false})
      }
      else{
        this.setState({disabled:true})
        this.props.onEdit(this.props.index,this.state.title)
     

      }

      this.setState({
        title:this.props.data.title,
       
        })

    
    }

    const handleChange = (e) =>{
      let name= e.target.name
      let value= e.target.value
      this.setState({[name]:value})
      
     }

     const handleComplete= (e)=>{
       e.preventDefault()
      this.props.onComplete(this.props.index,this.props.data.title)
      
     }

    return (
      
      <div className="col-md-4  bg-white nopadding border-left ">
        

        <div className="d-flex flex-row justify-content-between mb-3">
        <input className="d-flex inputDisabled  text-dark" type="text" disabled={this.state.disabled} onChange={handleChange} name="title" defaultValue={this.props.data.title }/>
       
        </div>
        <div className={this.props.data.status ? "d-none ":"bg-light"}>
       <div className="d-flex flex-row justify-content-between ">
        <button onClick={handleComplete} className="d-flex  btn   "><i className="fa fa-check-circle"></i></button>
        <div className="d-flex ">
         
        <button  onClick={editElement} className={this.state.disabled ? "d-flex btn " :"d-flex btn btn-primary  "} ><i className={this.state.disabled ? "fa fa-edit" : "fa fa-check-circle"}></i></button>
        <button  className="d-flex btn  mr-left" onClick={handleRemove}><i className="fa fa-trash"></i></button>
        </div>
        </div>
        </div>
      </div>
      
    )
  }
}


const mapDispatchToProps= (dispatch)=>{
  return{
  onRemove:(index) => dispatch(actions.remove_todo(index)),
  onEdit:(index,title) => dispatch(actions.edit_todo(index,title)),
  onComplete: (index,title) => dispatch(actions.complete_todo(index,title))
}
}

export default connect(null,mapDispatchToProps)(Todo_item)

