import { useContext } from 'react';
import { ChallengeBoxContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/ExperienceBar.module.css';



export default function ExperienceBar() {
   const {currentExp, expToNextLevel} = useContext(ChallengeBoxContext);
    
   const percentToNextLevel = Math.floor((currentExp * 100) / expToNextLevel)
   
    return(
        <header className={styles.experienceBar}>
            <span>0 xp</span>
            <div>
                <div style={{width: `${percentToNextLevel}%`}}></div>

                <span className={styles.currentExp} style={{left: `${percentToNextLevel}%`}}> {currentExp}xp</span>
            </div>
            <span>{expToNextLevel} xp</span>
            
        </header>
    );
}