import React, { useEffect } from "react";
import '../CSS/Skills.css'
import { useDispatch, useSelector } from "react-redux";
import { getskills } from "../JS/Sliceskills/Sliceskills";

const Skils = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getskills());
  }, []);
  const skillslist = useSelector((store)=>(store.skills?.skills));
  console.log("sss",skillslist);
  return (
    <div className="container_skills">
      <h1>My skills</h1>
    <div className="skills">
      <ul>
        {skillslist?.map((el)=>( <li>
          <h3>{el.skills}</h3>
          <span className="bar">
            <span className="html"></span>
          </span>
        </li>))}
       
       
      </ul>
    </div>
    </div>
  );
};

export default Skils;
