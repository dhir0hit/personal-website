import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Error from './pages/Error.jsx'
import Landing from "./pages/Landing.jsx";
import Loading from "./pages/Loading.jsx";
import Home from "./pages/Home.jsx";

import '/public/styles/theme.css'
import Skills from "./pages/Skills.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Landing />} />
              <Route index element={<Landing />} />
              <Route path={'home'} element={<Home />} />
              <Route path={'skills'} element={<Skills />} />

              <Route path={'loading'} element={<Loading />} />
              <Route path={"*"} element={<Error />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
