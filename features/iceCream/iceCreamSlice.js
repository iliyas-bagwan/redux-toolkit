const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numberOfIceCream: 15
}

const iceCreamSlice = createSlice({
    name:'iceCream',
    initialState,
    reducers:{
        ordered: (state) => {
            state.numberOfIceCream--
        },
        restocked: (state, action) => {
            state.numberOfIceCream += action.payload
        }

    },
    // extraReducers: {
    //     ['cake/ordered'] : (state) => {
    //         state.numberOfIceCream--
    //     }
    // }
    extraReducers: (builder) =>{
        builder.addCase(cakeActions.ordered, state => {
            state.numberOfIceCream--
        })
    }
})


module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions