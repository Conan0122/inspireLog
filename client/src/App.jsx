import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./Layout"
import LoginPage from "./pages/LoginPage"
import BlogCreate from "./pages/BlogCreate"
import RegisterPage from "./pages/RegisterPage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { path: "", element: <Home/>},
      { path: "login", element: <LoginPage/>},
      { path: "register", element: <RegisterPage/>},
      { path: "blogcreate", element: <BlogCreate/>},
    ]
  }
])


function App() {
  return (
    <RouterProvider router = {router}/>
  )
}

export default App
