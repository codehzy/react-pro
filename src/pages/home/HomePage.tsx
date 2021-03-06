import React from 'react';
import {
  Header,
  Footer,
  Carousel,
  SideMenu,
  ProductCollection,
  BusinessPartners,
} from '../../components';

import { giveMeDataActionCreator } from '../../redux/recommendProducts/recommendProductsActions';
import { RootState } from '../../redux/store';

import { Row, Col, Typography, Spin } from 'antd';
import styles from './HomePage.module.css';

import sideImage from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';
import { connect } from 'react-redux';
import { withTranslation, WithTranslation } from 'react-i18next';

// 使用 redux 来维护数据
const mapStateToProps = (state: RootState) => {
  return {
    loading: state.recommendProducts.loading,
    error: state.recommendProducts.error,
    productList: state.recommendProducts.productList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    giveMeData: () => {
      dispatch(giveMeDataActionCreator());
    },
  };
};

type PropsType = WithTranslation &
  ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

class HomePageComponent extends React.Component<WithTranslation & PropsType> {
  componentDidMount() {
    this.props.giveMeData();
  }

  render() {
    const { t } = this.props;

    const { productList, loading, error } = this.props;
    if (loading) {
      return (
        <Spin
          size="large"
          style={{
            marginTop: 200,
            marginBottom: 200,
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '100%',
          }}
        ></Spin>
      );
    }

    if (error) {
      return <div>网站错误:{error}</div>;
    }

    return (
      <>
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
          <ProductCollection
            title={
              <Typography.Title level={3} type="warning">
                {t('home_page.hot_recommended')}
              </Typography.Title>
            }
            sideImage={sideImage}
            products={productList[0].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="danger">
                {t('home_page.new_arrival')}
              </Typography.Title>
            }
            sideImage={sideImage2}
            products={productList[1].touristRoutes}
          />
          <ProductCollection
            title={
              <Typography.Title level={3} type="success">
                {t('home_page.domestic_travel')}
              </Typography.Title>
            }
            sideImage={sideImage3}
            products={productList[2].touristRoutes}
          />
          <BusinessPartners />
        </div>
        <Footer />
      </>
    );
  }
}

export const HomePage = connect(
  mapStateToProps,
  mapDispatchToProps
)(withTranslation()(HomePageComponent));
