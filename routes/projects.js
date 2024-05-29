const express=require('express')
const projectRouter=express.Router()
const project=require('../models/projects')
//add project

projectRouter.post("/addproject",async(req,res)=>{
        try{
        const newprojectaj=new project(req.body)
        const result= await newprojectaj.save()
        res.send({msg:"addproject",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    projectRouter.get('/allproject',async(req,res)=>{
        try {
            let result = await project.find()
            res.send({msg:"voici toutes project",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul project
    projectRouter.get('/:id',async(req,res)=>{
        try {
            let result= await project.findById({_id:req.params.id})
            res.send({msg:"voici project",result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    projectRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await project.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"project supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update project
    projectRouter.put('/:id',async(req,res)=>{
        try {
            let result= await project.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"project modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=projectRouter