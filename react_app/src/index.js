import React from "react";
import ReactDOM from "react-dom/client";
import "mapbox-gl/dist/mapbox-gl.css";
import "./index.css";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById("root")).render(<BrowserRouter><App /></BrowserRouter>);
