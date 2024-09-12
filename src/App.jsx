import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import PresidentPage from "./pages/PresidentPage";
import AboutWIsSNUPage from "./pages/AboutWIsSNUPage";
export default function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <AboutWIsSNUPage />
      <PresidentPage />
      <Footer />
    </>
  );
}
