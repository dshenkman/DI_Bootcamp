let initState = {
  imput: '',
  items: []
}

export const reducer = (state = initState, action={}) => {

 switch(action.type) {
  case  'UPDATE':
     return {...state, input:action.payload}

  case 'ADD':
     return {...state, items:[...state.items,action.payload]}

    case 'DEL':
    let arr2 = [...state.items];
    arr2.splice(action.payload, 1);
    return {
      ...state,
      items:arr2
    }


  default:
   return {...state }

 }


}
