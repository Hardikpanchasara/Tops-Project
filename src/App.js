import { RouterProvider, useNavigate } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import "./admin.css"


function App() {
  return (<RouterProvider router={MainRoutes} /> )
}

export default App;
