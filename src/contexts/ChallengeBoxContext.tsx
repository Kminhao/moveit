import { createContext, useState, ReactNode, useEffect } from 'react';
import challenges from '../../challenges.json';


interface Challenge {
    type: 'body' | 'eye',
    description: string,
    amout: number,

}


interface ChallengeBoxContextData{
    level : number,
    currentExp : number,
    challengesCompleted : number,
    activeChallenge : Challenge;
    expToNextLevel: number;
    startNewChallenge : () => void,
    levelUp : () => void,
    resetChallenge : () => void;
    completeChallenge : () => void;
 
}



interface ChallengeBoxProviderProps {
    children?: ReactNode;
}


export const ChallengeBoxContext = createContext({} as ChallengeBoxContextData);



export function ChallengeBoxProvider({ children }: ChallengeBoxProviderProps) {
    

const [level, setLevel] = useState(1);
const [currentExp, setCurrentExp] = useState(0);
const [challengesCompleted, setchallengesCompleted] = useState(0);


const [activeChallenge, setActiveChallenge] = useState(null);


const expToNextLevel = Math.pow((level +1 ) * 4, 2);

useEffect(() => {
    Notification.requestPermission();
}, [])

function levelUp() {
    setLevel(level + 1)
}


function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);

    new Audio('/notification.mp3').play;
    
    if(Notification.permission === 'granted'){
        new Notification('Novo Desafio', {
            body: `Valendo ${challenge.amount} xp`,
            
        })
    }

}


function resetChallenge(){
    setActiveChallenge(null);
}


function completeChallenge() {
    if(!activeChallenge) {
        return;
    }

    const {amount} = activeChallenge;

    let finalExp = currentExp + amount;

    if(finalExp > expToNextLevel){
        finalExp = finalExp - expToNextLevel;
        levelUp();

    }

    setCurrentExp(finalExp);
    setActiveChallenge(null);
    setchallengesCompleted(challengesCompleted + 1);

}



    
    return (
        <ChallengeBoxContext.Provider
            value={{ level, currentExp, challengesCompleted, startNewChallenge, levelUp, activeChallenge, resetChallenge, expToNextLevel, completeChallenge }}
                
      
        >
            {children}
        </ChallengeBoxContext.Provider>
    );
}
