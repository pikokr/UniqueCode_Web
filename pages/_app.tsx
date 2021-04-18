import '../styles/globals.css';
import '../styles/global.css';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { library } from "@fortawesome/fontawesome-svg-core";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

library.add(fab);

export default MyApp;