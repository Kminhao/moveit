import { useContext } from 'react';
import { ChallengeBoxContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    
    const { level } = useContext(ChallengeBoxContext);
    
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Kminhao.png" alt="" />
            <div>
                <strong>Gabruel Freitas</strong>
                <p> <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div> 
        </div>

    );
}