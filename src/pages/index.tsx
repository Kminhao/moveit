import CompletedChallenges from "../components/CompletedChallenges";
import Countdown from "../components/CountDown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import styles from '../styles/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import Head from 'next/head';
import ChallengeBox from "../components/ChallengeBox";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Início | Move it</title>
      </Head>


      <ExperienceBar />
      <CountdownProvider>
        <section>
          <div>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </div>

          <div>
            <ChallengeBox />

          </div>
        </section>

      </CountdownProvider>
    </div>
  )
}
