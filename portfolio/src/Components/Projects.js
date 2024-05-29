import React, { useEffect } from 'react'
import '../CSS/projects.css'
import {useDispatch, useSelector} from 'react-redux'
import { getproject } from '../JS/Sliceproject/Sliceproject';

const Projects = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproject());
  }, []);
  const projecttlist = useSelector((store)=>(store.project?.project));
  
  
  return (
    <div className='container'>
      <h1>My Projects</h1>
    <div className='projects'>
    {projecttlist?.map((el)=>(<div className='card'>
        <div className='contenu_card'>
        <div className='contenu_img'><img src={el.img}></img></div>
          <div className='title_project'>{el.title}</div>
          <div className='description_project'>{el.description}</div>
          

        </div>
      </div>))}
      
      
    
    
    </div>
    </div>
  )
}

export default Projects
