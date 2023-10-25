import produce from 'immer';

const initialState = {
    BKl: [],

}
export default produce((state, action) => {
    debugger
    switch (action.type) {
        case 'GET_ALL_BK':
            state.BKl = action.payload;
            break;
        case 'DELETE_BK':
            state.BKl = state.BKl.filter(i => i.id != action.payload);
            break;
        case 'UPDATE_BK':
            state.BKl[state.BKl.findIndex(x=>x.id===action.payload.id)]=action.payload
            break;
        case 'SET_BK_ID':
            state.BKl.id = action.payload;
            break;
        case 'SET_BK_NAME':
            state.BKl.name = action.payload;
            break;
        case 'DELETE_BK':
            state.BKl = state.BK.filter(b => b.id != action.payload);
            break;
        case 'SET_USER_ID':
            state.BKl.name = action.payload;
            break;
    }

}, initialState
)