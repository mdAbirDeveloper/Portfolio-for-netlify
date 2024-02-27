import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Contect from "./Contect/Contect";
import Feature from "./feature/Feature";
import ClientComment from "./Home/ClientComment/ClientComment";
import Home from "./Home/home/Home";
import Main from "./Layout/MainLayout/Main";
import Login from "./Login/Login";
import SignUp from "./SignUp/SignUp";
import Liquid from "./feature/anotherButton/Liquid";
import Blog from "./Home/blog/Blog";
import WriteBlog from "./Home/blog/WriteBlog";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import UploadRecentWork from "./Home/RecentWork/UploadRecentWork";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/Blog",
          element: <Blog></Blog>,
        },
        {
          path: "/writeblog",
          element: (
            <ProtectedRoute>
              <WriteBlog></WriteBlog>
            </ProtectedRoute>
          ),
        },
        {
          path: "/uploadRecentWork",
          element: (
            <ProtectedRoute>
              <UploadRecentWork></UploadRecentWork>
            </ProtectedRoute>
          ),
        },
        
        {
          path: "/Contect",
          element: <Contect></Contect>,
        },
        {
          path: "/clientcomment",
          element: <ClientComment></ClientComment>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/feature",
          element: <Feature></Feature>,
        },
        {
          path: "/feature/liquid",
          element: <Liquid></Liquid>,
        },
      ],
    },
  ]);
  return (
    <div className="App max-w-screen-xl mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
