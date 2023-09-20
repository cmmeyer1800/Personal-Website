import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Layout from "./Layout.js";
import NoPage from "./NoPage.js";
import PersonalHome from "./PersonalHome.js";
import ProjectHome from "./ProjectHome.js"
import Contact from "./Contact.js";

import 'bulma/css/bulma.min.css';
import './index.css'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/personal" element={<PersonalHome/>}/>
          <Route path="/projects" element={<ProjectHome/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);