import MainLayout from "@/components/common/layout/main-layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
