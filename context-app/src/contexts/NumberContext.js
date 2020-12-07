import React, { createContext, useReducer } from 'react'

export const NumberContext = createContext() 

const NumReducer = (state , actions) => {
    switch (actions.type) {
        case 'ADD_ONE':
            return state + 1 
        case 'ADD_TEN':
            return state + 10
        case 'ADD_NUM':
            return state + actions.num
        default:
            return state
    }
}

const NumberContextProvider = (props) => {
    const [ number, dispatch ] = useReducer(NumReducer, 0)

    return (
        <NumberContext.Provider value={{number, dispatch}}>
            {props.children}
        </NumberContext.Provider>
    )

    // const [ number, setNumber ] = useState(0)

    // const addOne = () => {
    //     setNumber(number + 1)
    // }

    // const addTen = () => {
    //     setNumber(number + 10)
    // }

    // const addNum = (num) => {
    //     setNumber(number + num)
    // }

    // return (
    //     <NumberContext.Provider value={{number, setNumber, addOne, addTen, addNum}}>
    //         {props.children}
    //     </NumberContext.Provider>
    // )
}

export default NumberContextProvider
