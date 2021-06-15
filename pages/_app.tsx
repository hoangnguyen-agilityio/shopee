import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import AppProvider from 'store/AppContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Shopee Việt Nam | Mua và Bán Trên Ứng Dụng Di Động Hoặc Website</title>
        <meta
          name="description"
          content="Mua sắm trực tuyến hàng triệu sản phẩm thời trang nam nữ, đồ điện tử, gia dụng...Giá tốt & nhiều ưu đãi. Mua và bán online trong 30 giây. Shopee đảm bảo nhận hàng hoặc hoàn tiền. Shopee Đảm Bảo | Miễn Phí Vận Chuyển | Gợi Ý Hôm Nay"
        />
        <link rel="icon" href="/images/shopee.svg" />
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </div>
  );
}
export default MyApp;
