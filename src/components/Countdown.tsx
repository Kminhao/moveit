import { useState, useEffect, Fragment, useContext } from 'react';
import styles from '../styles/components/Countdown.module.css';
import { ChallengeBoxContext} from '../contexts/ChallengeBoxContext';





let countDownTimeOut: NodeJS.Timeout;


export default function Countdown() {

    const {startNewChallenge } = useContext(ChallengeBoxContext);

    const [time, setTime] = useState(0.1 * 60);

    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');

    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');


    function startCountdown() {
        setIsActive(true);
    }


    function resetCountdown() {
        setIsActive(false);
        clearTimeout(countDownTimeOut);
        setTime(25 * 60)
        
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


    return (
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {
                hasFinished ?
                    (
                        <button disabled className={styles.countdownButton} onClick={resetCountdown}>
                            Ciclo Finalizado
                        </button>
                    )
                    : (
                        <Fragment>
                            {isActive ?
                                (<button type="button" className={`${styles.countdownButton} ${styles.countdownButtonActive}`} onClick={resetCountdown}>
                                    Abandonar Ciclo
                                </button>)
                                :
                                (<button type="button" className={styles.countdownButton} onClick={startCountdown}>
                                    Iniciar Ciclo
                                </button>)
                            }
                        </Fragment> 
                        )
            }


        </div>

    );
}