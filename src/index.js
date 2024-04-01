import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js"
import Layout from "./Layout.js";
import NoPage from "./NoPage.js";
import Gallery from "./gallery.js";
import ProjectHome from "./ProjectHome.js"
import Contact from "./Contact.js";
import Fun from "./Fun.js";
import BlogHome from "./blog/blogHome.js";
import BlogPost from "./blog/post.js";

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
          <Route path="/fun" element={<Fun/>} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeManager>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);