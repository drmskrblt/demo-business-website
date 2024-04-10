import MainRoutes from "./components/MainRoutes";

import Header from "./components/Header";
import Footer from "./components/Footer";
import StickySidebar from "./components/StickySidebar";
import ScrollToTop from "./components/scrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Header />
      <main>
        <MainRoutes />
        <StickySidebar />
      </main>
      <Footer />
    </>
  );
}

export default App;
