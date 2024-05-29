const express=require('express')
const aboutRouter=express.Router()
const about=require('../models/about')
//add about

aboutRouter.post("/addabout",async(req,res)=>{
        try{
        const newaboutaj=new about(req.body)
        const result= await newaboutaj.save()
        res.send({msg:"addabout",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    aboutRouter.get('/allabout',async(req,res)=>{
        try {
            let result = await about.find()
            res.send({msg:"voici toutes about",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul about
    aboutRouter.get('/:id',async(req,res)=>{
        try {
            let result= await about.findById({_id:req.params.id})
            res.send({msg:"voici about",result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    aboutRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await about.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"about supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update about
    aboutRouter.put('/:id',async(req,res)=>{
        try {
            let result= await about.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"about modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=aboutRouter