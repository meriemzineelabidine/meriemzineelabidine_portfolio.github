const express=require('express')
const skillsRouter=express.Router()
const skills=require('../models/skills')
//add skills

skillsRouter.post("/addskills",async(req,res)=>{
        try{
        const newskillsaj=new skills(req.body)
        const result= await newskillsaj.save()
        res.send({msg:"addskills",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    skillsRouter.get('/allskills',async(req,res)=>{
        try {
            let result = await skills.find()
            res.send({msg:"voici toutes skills",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul skills
    skillsRouter.get('/:id',async(req,res)=>{
        try {
            let result= await skills.findById({_id:req.params.id})
            res.send({msg:"voici skills",result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    skillsRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await skills.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"skills supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update skills
    skillsRouter.put('/:id',async(req,res)=>{
        try {
            let result= await skills.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"skills modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=skillsRouter