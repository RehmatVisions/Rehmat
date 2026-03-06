import HeroSec from './HeroSec'
import Feautures from './Feautures'
import Projects from './Projects'
import Resume from './Resume'
import Testimonials from './Testimonials'
import Contacts from './Contacts'
import Footer from './Footer'
 

const Home = () => {
  return (
        <div>   
          
          <HeroSec />
             <Resume />
             <Projects /> 
           <Feautures /> 
       
              
                 {/* <ResumeSkills />  */}
              <Testimonials /> 
               
                 <Contacts /> 
                      
                 <Footer/>
                 
         
                 
           
               
    </div>
  )
}

export default Home
