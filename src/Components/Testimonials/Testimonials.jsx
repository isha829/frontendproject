import React,{useRef} from 'react'
import './testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonials = () => {
    const slider= useRef();
    let tx=0;
    const slideForward =()=>{
      if(tx>-50){
        tx-=25;
      }
      slider.current.style.transform=`translateX(${tx}%)`;
    }
    const slideBackward =()=>{
        if(tx<0){
            tx+=25;
          }
          slider.current.style.transform=`translateX(${tx}%)`;
    }
  return (
   <div className='Testimonials'>
    <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
    <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
    <div className='slider'>
    <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                   <img src={user_1} alt="" />
                   <div>
                    <h3>Maria Lopez</h3>
                    <span>Edusity, USA</span>
                   </div>
                   </div>
                   <p>I love the campus environment here. Whether it's the historic buildings, 
                    beautiful green spaces, or stunning views, it's a pleasure to study and spend time here.
                    The physical beauty of the campus adds to the overall positive experience of being a student.</p>
               </div>
            </li>
            <li>
            <div className="slide">
                <div className="user-info">
                   <img src={user_2} alt="" />
                   <div>
                    <h3>Ahmed Khan</h3>
                    <span>Edusity, USA</span>
                   </div>
                   </div>
                   <p>The sense of community here is incredible. 
                    I've made lifelong friends and found mentors who genuinely care about my success. 
                    It's reassuring to know that I have a support network to lean on during both the good times and the tough times</p>
               </div>
            </li>
            <li>
            <div className="slide">
                <div className="user-info">
                   <img src={user_3} alt="" />
                   <div>
                    <h3>Anna Petrov</h3>
                    <span>Edusity, USA</span>
                   </div>
                   </div>
                   <p>There's always something happening on campus, whether it's cultural events, guest speakers, 
                    or student-led activities. The vibrant campus life makes me feel like 
                    I'm part of something bigger than myself and adds to the overall richness of my college experience.</p>
               </div>
            </li>
            <li>
            <div className="slide">
                <div className="user-info">
                   <img src={user_4} alt="" />
                   <div>
                    <h3>Lucas Silva</h3>
                    <span>Edusity, USA</span>
                   </div>
                   </div>
                   <p>I've had the opportunity to get involved in extracurricular activities that align with my interests and passions. 
                    Whether it's volunteering in the community, participating in sports clubs, or joining academic organizations, 
                    these experiences have been incredibly rewarding and have helped me grow as a person.</p>
               </div>
            </li>
        </ul>
       </div>
   </div>
  )
}

export default Testimonials
