import { RouterProvider, useNavigate } from 'react-router-dom';
import MainRoutes from './MainRoutes';

function App() {
  return (<RouterProvider router={MainRoutes} /> )
}

export default App;
