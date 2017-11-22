export default function swimReducer(state = [], action) {
    switch(action.type) {
        case 'CREATE_SWIM':
        return [...state, 
            Object.assign({}, action.swim)]
        
        default:
            return state
    }
}