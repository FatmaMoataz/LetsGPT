import imageKit from "../configs/imageKit.js"
import Chat from "../models/Chat.js"
import axios from "axios"
import openai from '../configs/openai.js'

// Text-based AI Chat Message Controller
export const textMessageController = async(req , res) => {
try {
    const userId = req.user._id
    if(req.user.credits < 1) {
        return res.json({success:false , message:"You don't have enough credits to use this feature"})
    }
    const {chatId , prompt} = req.body
    let chat = await Chat.findOne({userId , _id: chatId})
    if (!chat) {
        chat = await Chat.create({ userId, username: req.user.name, name: "New Chat", messages: [] })
    }
    chat.messages.push({role:"user" , content: prompt , timestamp: Date.now() , isImage:false})

    const {choices} = await openai.chat.completions.create({
    model: "gemini-2.5-flash",
    messages: [
        {
            role: "user",
            content: prompt,
        },
    ],
});

const reply = {...choices[0].message , timestamp: Date.now() , isImage: false}
res.json({status:true , reply})
chat.messages.push(reply)
await chat.save()

await User.updateOne({_id: userId }, {$inc: {credits:-1}})

} catch (error) {
    res.json({status:false , message:error.message})
}
}

// Image Generation Message Controller
export const imageMessageController = async(req , res) => {
try {
const userId = req.user._id
if(req.user.credits < 2) {
return res.json({success:false , message:"You don't have enough credits to use this feature"})
}
const {prompt , chatId , isPublished} = req.body
const chat = await Chat.findOne({userId , _id:chatId})
chat.messages.push({
    role:"user",
    content:prompt,
    timestamp: Date.now(),
    isImage:false
})
const encodedPrompt = encodeURIComponent(prompt)
const generateImageUrl = `${process.env.IMAGEKIT_URL_ENDPOINT}/ik-genimg-prompt-${encodedPrompt}/letsgpt/${Date.now()}.png?tr=w-800,h-800`
const aiImageResponse = await axios.get(generateImageUrl , {responseType:"arraybuffer"})
const base64Image = `data:image/png;base64,${Buffer.from(aiImageResponse.data,"Binary").toString('base64')}`
const uploadImage = await imageKit.upload({
    file: base64Image,
    fileName: `${Date.now()}.png`,
    folder: "letsgpt"
})
const reply = {role:"assistant" , content:uploadImage.url , timestamp: Date.now() , isImage:true , isPublished}
res.json({status:true , reply})
chat.messages.push(reply)
await chat.save()
await User.updateOne({_id: userId }, {$inc: {credits:-2}})
} catch (error) {
    res.json({status:false , message:error.message})
}
}

// Publish Image Message Controller
export const getPublishedImages = async (req , res) => {
    try {
        const publishedImageMessages = await Chat.aggregate([
            {$unwind:"$messages"},
            {$match:{"messages.isImage":true,"messages.isPublished":true }},
            {$project:{_id:0 , imageUrl:"$messages.content" ,username:"$username"}}                 
        ])
        res.json({status:true , images:publishedImageMessages.reverse()})    
    } catch (error) {
        return res.json({status:false , message:error.message})
    }
}