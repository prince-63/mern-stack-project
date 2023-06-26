import React from 'react'
import "./default.scss"
import Nav from "./components/Nav/Nav";
import {BrowserRouter as Routers} from 'react-router-dom';
import AllRoutes from './AllRoutes';

const App = () => {
  return (
    <Routers>
        <Nav />
        <AllRoutes />
    </Routers>
  )
}

export default App