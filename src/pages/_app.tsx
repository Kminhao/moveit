import '../styles/global.css';

import { ChallengeBoxProvider } from '../contexts/ChallengeBoxContext';


function MyApp({ Component, pageProps }) {
  return (
    <ChallengeBoxProvider>
      <Component {...pageProps} />
    </ChallengeBoxProvider>
  )
}

export default MyApp
