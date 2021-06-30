import * as type from './actionTypes'

export const add_todo= (title)=>{
  return{
    type:type.ADD_TODO,
    payload:{
      title:title,
    }
  }
}

export const remove_todo= (index)=>{
  return{
    type:type.REMOVE_TODO,
    payload:index
  }
}

export const edit_todo= (index,title)=>{
  return{
    type:type.EDIT_TODO,
    payload:{
      index:index,
      title:title,
      
    }
  }
}

export const complete_todo= (index,title)=>{
  return{
    type:type.COMPLETE_TODO,
    payload:{
      index:index,
      title:title,
      status:"completed"
      
    }
  }
}