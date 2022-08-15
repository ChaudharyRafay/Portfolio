import './App.css';
import {useEffect,useState}  from 'react'
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Review from './components/reviews/Review';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingBar from 'react-top-loading-bar'
function App() {
  const [progress, setprogress] = useState(0)
  const  setProgress=(progress)=>{
  setprogress(progress);
}
  useEffect(() => {
    AOS.init({
      // once: false,
      anchorPlacement: 'top-bottom',
      // easing: 'ease-in-out-back'
      duration:"2000"
    });
    // AOS.refresh();
  }, []);
  return (
    <>
     <LoadingBar
        height={4}
        color='#f11946'
        progress={progress}     
        />
     <Header/>
     <Navbar/>
     <About/>
     <Experience/>
     <Services/>
     <Portfolio/>
     <Review/>
     <Contact setProgress={setProgress}/>
     <Footer/>
    </>
  );
}

export default App;
