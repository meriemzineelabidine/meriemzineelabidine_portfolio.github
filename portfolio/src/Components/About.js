import React, { useEffect } from 'react'
import '../CSS/About.css'
import { useDispatch, useSelector } from 'react-redux';
import { getabout } from '../JS/Sliceabout/Sliceabout';

const About = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getabout());
  }, []);
  const aboutlist = useSelector((store)=>(store.about?.about));
  console.log("lll",aboutlist);
  return (
    <div className='about'>
      <div className='img_about'>
        <img src='../images/about.png'></img>
      </div>
      {aboutlist?.map((el)=>(  <div className='description_about'>
        <h2>About <span>Me</span></h2>
        <h3> {el.title}</h3>
        <p>{el.description}</p>
      </div>))}
    
      
    </div>
  )
}

export default About
