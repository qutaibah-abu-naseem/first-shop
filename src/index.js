import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';  // استيراد ملف CSS لتنسيق التطبيق
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Appwarper from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Appwarper />
  </React.StrictMode>
);


