import '@/styles/globals.css'
import { Provider } from 'react-redux';
import store from '../Redux/store';
export default function App({ Component, pageProps }) {
   return (
    <Provider store={store}> {/* Gunakan Provider di sini */}
      <Component {...pageProps} />
    </Provider>
  );
}
