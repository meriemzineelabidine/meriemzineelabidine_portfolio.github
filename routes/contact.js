const express=require('express')
const contactRouter=express.Router()
const contact=require('../models/contact')
const{RulesContact,validation}=require('../midellwaire/validator')

//add contact

contactRouter.post("/addcontact",RulesContact(),validation,async(req,res)=>{
    const { name, email, message} = req.body;
        try{
        const newcontactaj=new contact({ name, email, message})
        const result= await newcontactaj.save()
        res.send({msg:"addcontact",result})
    }
    catch (error) {
        console.log(error)
        
    }
    })
    //get all
    contactRouter.get('/allcontact',async(req,res)=>{
        try {
            let result = await contact.find()
            res.send({msg:"voici toutes contact",voicilist:result})
            
        } catch (error) {
            console.log((error))
         
        }
       
    })
    //get un seul contact
    contactRouter.get('/:id',async(req,res)=>{
        try {
            let result= await contact.findById({_id:req.params.id})
            res.send({msg:"voici contact",result})
            
        } 
        catch (error) {
            console.log(error)
            
        }
       
    })
    // delete
    contactRouter.delete('/:id',async(req,res)=>{
        try {
            let result= await contact.findByIdAndDelete({_id:req.params.id})
            res.send({msg:"contact supprimé"})
            
        } catch (error) {
            console.log(error)

            
        }
    })
    //update contact
    contactRouter.put('/:id',async(req,res)=>{
        try {
            let result= await contact.findByIdAndUpdate({_id:req.params.id},{$set:{...req.body}})
            res.send({msg:"contact modifié",result})
            
        } catch (error) {
            console.log(error)
            
        }
    }
    )
    

module.exports=contactRouter