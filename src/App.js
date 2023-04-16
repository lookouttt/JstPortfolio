import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";

function App() {
    return (
        <div className="App">
            <Header />
            <LandingPage />
            <AboutPage />
            {/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
        </div>
    );
}

export default App;