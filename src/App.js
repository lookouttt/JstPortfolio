import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <AboutPage />
            <ProjectsPage />
        </div>
    );
}

export default App;