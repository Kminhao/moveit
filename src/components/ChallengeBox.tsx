import { useContext } from 'react';
import { ChallengeBoxContext } from '../contexts/ChallengeBoxContext';
import styles from '../styles/components/ChallengeBox.module.css';


export default function ChallengeBox() {
    const {activeChallenge, resetChallenge} = useContext(ChallengeBoxContext);



    return (
        <div className={styles.challengeBoxContainer}>
            {activeChallenge ?
                (
                    <div className={styles.challangeBoxActive}>
                        <header>Ganhe {activeChallenge.amout} xp</header>
                        <main>
                            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
                            <strong>Novo Desafio</strong>
                            <p>{activeChallenge.description}</p>
                        </main>

                        <footer>
                            <button onClick={resetChallenge} type="button" className={styles.challangeFailedButton}>Falhei</button>
                            <button type="button" className={styles.challangeBoxSuccessButton}>Completei</button>
                        </footer>


                    </div>
                )


                :
                (
                    <div className={styles.challengeBoxNotActive}>
                        <strong>Finalize um ciclo para receber um desafio</strong>
                        <p>
                            <img src="icons/level-up.svg" alt="Level up" />
                                Avance de Level completando desafios!
                            </p>
                    </div>
                )
            }
        </div>
    );
}