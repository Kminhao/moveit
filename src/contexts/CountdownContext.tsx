import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeBoxContext } from "./ChallengeBoxContext";


let countDownTimeOut: NodeJS.Timeout;

interface CountdownContextData {
    minutes : number,
    seconds : number,
    hasFinished : boolean,
    isActive : boolean,
    startCountdown : () => void,
    resetCountdown: () => void


}



interface CountdownContextProviderProps {
    children?: ReactNode;
}



export const CountdownContext = createContext({} as CountdownContextData);


export function CountdownProvider({children} : CountdownContextProviderProps) {
    
    const {startNewChallenge } = useContext(ChallengeBoxContext);

    const [time, setTime] = useState(0.1 * 60);

    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    

    function startCountdown() {
        setIsActive(true);
    }


    function resetCountdown() {
        setIsActive(false);
        clearTimeout(countDownTimeOut);
        setTime(25 * 60)
        setHasFinished(false);
        
    }




    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time === 0) {
            console.log("finalizou")
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();

        }
    }, [isActive, time])




    return(
        <CountdownContext.Provider value={{
            minutes,
            seconds,
            hasFinished,
            isActive,
            startCountdown,
            resetCountdown
        }}>
            {children}
        </CountdownContext.Provider>
    )
}