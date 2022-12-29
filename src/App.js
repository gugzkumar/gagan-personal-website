import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Landing from "./Landing";
import Blogs from "./Blogs";
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
        path: "blogs",
        element: <Blogs />,
      },
    ],
  }
])

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div className="App-Container">
        <div className="body-container">
          <RouterProvider router={router} />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
