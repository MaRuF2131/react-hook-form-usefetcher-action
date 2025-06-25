import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Mainlayout() {
  return (
    <div>
      <Navbar />
      <main className="p-20">
        <Outlet />
      </main>
    </div>
  );
}