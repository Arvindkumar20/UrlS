// import express from "express";
import {urlModel} from '../models/models.url.js'

import shortid from "shortid"

const handleUrlget=async(req,res)=>{
    const urls=await urlModel.find({})
    if(!urls){
        return res.status(404).json({message:"No urls found"})
    }
    res.json(urls )
}
const handleUrlPost=async(req,res)=>{
    const url=req.body
    if(!url.url){
        return res.status(400).json({error:'redirectURL is required'})
    }
    const shortId = shortid()
    await urlModel.create({
        shortId:shortId,
        redirectUrl:url.url,
        visitHistory:[],
        createdBy:req.user._id
    })
     return res.render("home",{
        shortId:shortId,
        urls:await urlModel.find({createdBy:req.user._id})
     })
        }
                    const handleUrlDelete=async(req,res)=>{
                const {id}=req.params
                const url=await urlModel.findByIdAndDelete(id)
                      if(!url){
                 return res.status(404).json({message:"url not found"})
         
                }
         
                return res.render("home",{urls:await urlModel.find({createdBy:req.user._id})}) 
                    }
                    const handleUrlGetShortId=async(req,res)=>{
                        const shortId=req.params.shortId
                        const entry=await urlModel.findOneAndUpdate({shortId},{
                       $push:{
                        visitHistory:{
                            timestamp:Date.now()},
                                              },
                        });
                     
                    
                             res.redirect(entry.redirectUrl)
                            

                    }
                    const handleUrlGetAnalitics=async(req,res)=>{
                        const shortId=req.params.shortId
                        const entry=await urlModel.findOne({shortId})
                        if(!entry){
                            return res.status(404).json({message:"No url found"})
                            }
                          
                            const totalClicks=entry.visitHistory.length
                            res.json({
                               
                                totalClicks:totalClicks,
                                visitHistory:entry.visitHistory

                                })
                            
                            
            }


export {
    handleUrlget,
    handleUrlPost,
    handleUrlGetAnalitics,
    handleUrlDelete,
    handleUrlGetShortId,



}