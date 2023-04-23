import logo from './logo.svg';
import './App.css';
import { Button, Container } from 'react-bootstrap';
import { useRoutes } from 'react-router';
import AllPage from './Component/AllPage';
import NavBarItem from './Component/NavBarItem';
function App() {
  return (
    <>
      <NavBarItem />
        {useRoutes(AllPage())}
    </>
  );
}

export default App;
