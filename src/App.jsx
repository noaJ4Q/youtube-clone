import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar.jsx';
import { Home } from './pages/home/Home.jsx';
import { Video } from './pages/video/Video.jsx';
import { useState } from 'react';

function App() {

  const [sidebar, setSidebar] = useState(true);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home sidebar={sidebar}/>,
    },
    {
      path: '/video/:categoryId/:videoId',
      element: <Video />,
    },
  ]);

  return (
    <>
      <div>
        <Navbar setSidebar={setSidebar}/>
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
