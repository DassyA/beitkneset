import produce from 'immer';

const initialState = {
    USERL: [],
}
export default produce((state, action) => {
    debugger
    switch (action.type) {
        case 'GET_ALL_USER':
            state.USERL = action.payload;
            break;
        case 'UPDATE_USER':
            state.USERL[state.USERL.findIndex(x => x.id === action.payload.id)] = action.payload
            break;
        case 'ADD_USER':
            state.USERL.push(action.payload)
            break;
    }

}, initialState
)