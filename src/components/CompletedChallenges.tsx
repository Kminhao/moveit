import styles from '../styles/components/CompletedChallenges.module.css';


export default function CompletedChallenges() {
    return(
        <div className={styles.completedChallangerContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
}