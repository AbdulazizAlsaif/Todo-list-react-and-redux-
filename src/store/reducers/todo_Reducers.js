import * as type from "../actions/actionTypes"

const initialState = {
  Todos:[]
}

 const reducer = (state=initialState,action) =>{
  switch (action.type){
    case type.ADD_TODO :
      return{
        ...state,Todos:[...state.Todos,{ title:action.payload.title }]
      }
    case type.REMOVE_TODO:
      return{
        Todos:[ ...state.Todos.slice(0, action.payload),
          ...state.Todos.slice(action.payload + 1)]
      }
      case type.EDIT_TODO:
        return { 
          ...state, 
          Todos: state.Todos.map(
              (data, i) => i === action.payload.index ? {...data, title: action.payload.title}
                                      : data
          )
       }
       case type.COMPLETE_TODO:
        return { 
          ...state, 
          Todos: state.Todos.map(
              (data, i) => i === action.payload.index ? {...data, title: action.payload.title ,status:"completed"}
                                      : data
          )
       }
    
      default:
        return state;
     
  }
}

export default reducer;