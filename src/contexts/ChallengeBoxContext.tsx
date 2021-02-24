import { createContext, useState, ReactNode } from 'react';
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
    startNewChallenge : () => void,
    levelUp : () => void,
    resetChallenge : () => void;
    activeChallenge : Challenge;
    expToNextLevel: number;
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

function levelUp() {
    setLevel(level + 1)
}


function startNewChallenge() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randomChallengeIndex];
    setActiveChallenge(challenge);
}


function resetChallenge(){
    setActiveChallenge(null);
}



    
    return (
        <ChallengeBoxContext.Provider
            value={{ level, currentExp, challengesCompleted, startNewChallenge, levelUp, activeChallenge, resetChallenge, expToNextLevel }}
                
      
        >
            {children}
        </ChallengeBoxContext.Provider>
    );
}
