import Home from './pages/Home';
import UpdateContact from './pages/UpdateContact';
import {Routes, Route} from "react-router-dom";
import Container from './components/Container';
import Header from './components/Header';
function App() {
  return (
    <Container>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contacts/:id" element={<UpdateContact/>}/>
        </Routes>
    </Container>
  );
}

export default App;
