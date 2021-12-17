import { Col, Row } from 'antd';
import styles from './App.module.css';
import { Carousel } from './components/carousel';
import { Footer } from './components/footer';
import { Header } from './components/header/Header';
import { SideMenu } from './components/sideMenu/SideMenu';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* 页面内容content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;
