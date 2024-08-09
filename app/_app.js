import { MathJaxContext } from 'better-react-mathjax';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <MathJaxContext>
      <Component {...pageProps} />
    </MathJaxContext>
  );
}

export default MyApp;
