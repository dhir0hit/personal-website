import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import Error from './pages/Error.jsx'
// import Landing from "./pages/Landing.jsx";
import Loading from "./pages/Loading.jsx";
// import Home from "./pages/Home.jsx";

import '/public/styles/theme.css'
// import Skills from "./pages/Skills.jsx";


const Landing = React.lazy(() => import("./pages/Landing.jsx"))
// const Loading = React.lazy(() => import("./pages/Loading.jsx"))
const Home = React.lazy(() => import("./pages/Home.jsx"))
const Skills = React.lazy(() => import("./pages/Skills.jsx"))
// const Error = React.lazy(() => import("./pages/Error.jsx"))


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
