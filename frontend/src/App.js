import React from "react";
import { Home } from "./pages/Home.jsx";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
      <Home />
      <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT} />
    </>
  );
}

export default App;
