import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.js"
import Layout from "./components/Layout.js";
import NoPage from "./pages/noPage/NoPage.js";
import Gallery from "./pages/Gallery.js";
import ProjectHome from "./projects/ProjectHome.js"
import Contact from "./pages/Contact.js";
import BlogHome from "./blog/blogHome.js";
import BlogPost from "./blog/Post.js";

import { ThemeManager } from "./components/ThemeContext.js";

import 'bulma/css/bulma.min.css';
import './index.css'


export default function App() {
  return (
    <ThemeManager>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/blog" element={<BlogHome/>}/>
          <Route path="/blog/:blogid" element={<BlogPost/>}/>
          <Route path="/projects" element={<ProjectHome/>}/>
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeManager>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);