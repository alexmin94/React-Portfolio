import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from"react-router-dom"
import About from "./component/about";
import Contact from "./component/contact";
import Resume from "./component/resume";
import Work from "./component/work";
import Root from "./component/root";
import Home from "./component/home";
import Footer from "./component/footer"



function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/"element={<Root/>}>
<Route index element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/work" element={<Work/>}/>
<Route path="/resume" element={<Resume/>}/>
<Route path="/contact" element={<Contact/>}/>
      </Route>
    )
  )
  return (
    <>
    <RouterProvider router={router}/>
    <Footer/>
    </>
  );
}

export default App;
