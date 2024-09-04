
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Treatment from './Treatment';
import Doctors from './Doctors';
import Testimonial from './Testimonial';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import Booking from './Booking';
import Contact from './Contact';
import Nav from './Nav';


function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/' element={<Booking />} />
                <Route path="/about" element={<About />} />
                <Route path="/treatment" element={<Treatment/>} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/testimonial" element={<Testimonial />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>

            <Footer />
        </>
    );
}

export default App;
