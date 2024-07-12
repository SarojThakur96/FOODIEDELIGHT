import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex w-full h-screen relative ">
      <div>
        <Sidebar />
      </div>

      <div
        className={`flex-grow h-screen overflow-y-auto ease-in-out duration-300 `}
      >
        <div>
          <Header />
        </div>
        <div className="px-6 pt-4 ">
          <div className="space-y-4 w-full px-4 relative">
            <Home />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
