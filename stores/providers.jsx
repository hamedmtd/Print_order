import React, { createContext, memo } from 'react'
import 'helper/prototype';

export const Context = createContext({})

const MainProvider = memo(({ children }) => {

    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
})

export default MainProvider
