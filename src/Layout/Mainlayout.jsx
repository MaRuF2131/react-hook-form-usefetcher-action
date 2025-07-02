import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import {verifyUserAgent} from "../mytools/ProtectPage";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function Mainlayout() {
  const location = useLocation();
  useEffect(()=>{
    verifyUserAgent();
  },[location]);
  return (
    <div>
      <Navbar />
      <main className="p-20">
        <Outlet />
      </main>
    </div>
  );
}