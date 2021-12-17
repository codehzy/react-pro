import styles from './App.module.css';
import { Footer } from './component/footer';
import { Header } from './component/header/Header';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Footer />
    </div>
  );
}

export default App;
