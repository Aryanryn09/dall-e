import "./App.css";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { Home, CreatePost } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img
            src="https://blog.algorit.ma/content/images/size/w692/2022/12/Copy-of-Agustus-HImage-BLOG--26-.png"
            alt="logo"
            // type="image/svg+xml"
            className="shadow-2xl  w-28 object-contain rounded-md"
          />
        </Link>
        <Link
          to="/create-post"
          className="font-inter  font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md shadow-2xl "
        >
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh -73px)] ">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
