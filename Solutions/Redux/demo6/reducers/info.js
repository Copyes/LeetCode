let initialState = {
  name: '',
  description: ''
}
export default function InfoReducer(state, action) {
  if(!state) {
    state = initialState;
  }
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.name
      }
    case 'SET_DESC':
      return {
        ...state,
        description: action.description
      }
    default:
      return state;
  }
}