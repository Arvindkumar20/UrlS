const handleUserget=(req,res)=>{
res.json({
    name:"arvind",
    age:21,
    gender:"male"
})
}
const handleUserPost=(req,res)=>{
    res.json({
        name:"arvind",
        age:21,
        gender:"male",
        message:"create successfully"
    })
    }
    const handleUserPatch=(req,res)=>{
        
        res.json({
            name:"arvind",
            age:21,
            gender:"male",
            message:"update successfully"
        })
        }
        const handleUserDelete=(req,res)=>{
            res.json({
                name:"arvind",
                age:21,
                gender:"male",
                message:"deleted successfully"
            })
            }

export {
    handleUserget,
    handleUserPost,
    handleUserPatch,
    handleUserDelete,

}