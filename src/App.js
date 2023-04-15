import  './App.css'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'

import { Container} from './Components/index'
import { Header, Footer } from './sections/index'
import { Home,Streams,Profile,Details} from './Pages/index'





const App = () => {
    return (

        <>
            <Router>
            <Header />
            <Container> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/streams" element={<Streams/>} /> 
                    <Route path="/profile" element={<Profile/>} />     
                    <Route path="/details" element={<Details/>} />      
                </Routes>
             </Container>
            <Footer />
            </Router>
        </>
    );
    }

export default App;