import logo from "./logo.svg"; // Importing logo (not used in this code, but can be added in JSX later)
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importing React Router for routing functionality
import Home from "./pages/Home"; // Importing Home page component
import About from "./pages/About"; // Importing About page component
import User from "./pages/User"; // Importing User profile page component
import NotFound from "./pages/NotFound"; // Importing NotFound page for invalid routes
import Navbar from "./components/layout/Navbar"; // Importing Navbar component
import Footer from "./components/layout/Footer"; // Importing Footer component
import Alert from "./components/layout/Alert"; // Importing Alert component to display alerts
import { GithubProvider } from "./context/github/GithubContext"; // Importing GithubContext provider
import { AlertProvider } from "./context/alert/AlertContext"; // Importing AlertContext provider

function App() {
  return (
    // Wrapping the entire application with context providers to provide global state management
    <GithubProvider>
      <AlertProvider>
        {/* Router component for managing routing in the app */}
        <Router>
          <div className="flex flex-col justify-between h-screen ">
            {/* Navbar will be displayed at the top of every page */}
            <Navbar />

            {/* Main content area where different pages will be displayed */}
            <main className="container px-3 pb-12 mx-auto ">
              {/* The Alert component is displayed to show alerts (like error or success messages) */}
              <Alert />
              <Routes>
                {/* Define different routes and corresponding components */}
                <Route path="/" element={<Home />} /> {/* Home page route */}
                <Route path="/about" element={<About />} />{" "}
                {/* About page route */}
                <Route path="/user/:login" element={<User />} />{" "}
                {/* User profile page route */}
                <Route path="/notfound" element={<NotFound />} />{" "}
                {/* NotFound route for custom 404 page */}
                {/* Fallback route to handle invalid or undefined routes */}
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>

            {/* Footer will be displayed at the bottom of every page */}
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
