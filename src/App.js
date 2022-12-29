import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import './App.css';
import Landing from "./Landing";
import Blogs from "./Blogs";
import BlogPage from "./Blogs/BlogPage";
import Header from "./components/Header";
import theme from './styles/theme';

function Layout() {
  return <div><Header /><Outlet></Outlet></div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "posts",
        element: <Blogs />
      },
      {
        path: "posts/:blogFileName",
        element: <BlogPage />,
      },
    ],
  }
])

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <div className="App-Container">
          <div className="body-container">
            <RouterProvider router={router} />
          </div>
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
