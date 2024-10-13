import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import AdminPage from "./pages/AdminPage";
import { useUserStore } from "./store/useUserStore";

function App() {
  const { user } = useUserStore();
  const isAdmin = user?.role === "admin";
  return (
    <>
      <div className="fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]" />
      <div className="flex flex-col items-center px-4 md:px-8 lg:px-12">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/admin"
            element={isAdmin ? <AdminPage /> : <Navigate to={`/`} />}
          />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
