import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import PhotoPage from "./pages/PhotoPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <AboutPage />
            <ProjectsPage />
            <PhotoPage />
            <ContactPage />
            <Footer />
        </div>
    );
}

export default App;