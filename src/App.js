import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import MainRoutes from './MainRoutes';

function App() {
  return (<RouterProvider router={MainRoutes} /> )
}

export default App;
