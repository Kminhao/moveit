import { createContext, ReactNode } from "react";

interface CountdownContextData {

}



interface CountdownContextProviderProps {
    children?: ReactNode;
}



const CountdownContext = createContext({} as CountdownContextData);


export function CountdownProvider({children} : CountdownContextProviderProps) {
    
    
    
    return(
        <CountdownContext.Provider value={{

        }}>
            {children}
        </CountdownContext.Provider>
    )
}