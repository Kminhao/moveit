import { useContext } from 'react';
import { ChallengeBoxContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/CompletedChallenges.module.css';


export default function CompletedChallenges() {

    const { challengesCompleted } = useContext(ChallengeBoxContext);

    return (
        <div className={styles.completedChallangerContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}