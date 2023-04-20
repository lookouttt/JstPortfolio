import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import PhotoPage from "./pages/PhotoPage";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

const styles = {
    label: 'block text-gray-700 text-sm font-bold mt-5 pt-2 pb-1',
    field:
      'bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none',
    button:
      ' bg-gray-700 text-white font-bold mt-10 py-2 px-4 w-full rounded hover:bg-gray-600',
    errorMsg: 'text-red-500 text-sm',
  }

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <AboutPage />
            <ProjectsPage />
            <PhotoPage />
            <ContactPage styles={styles} />
            <Footer />
        </div>
    );
}

export default App;