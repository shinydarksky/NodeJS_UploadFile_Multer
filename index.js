const express = require('express')
const app = express()
const useRouter = require('./Routers/uploadRouter')
const port = 3000
app.set('view engine','ejs')
app.set('views','./Views')
app.use(express.static('./Public'));
app.get('/',(req,res)=>{
    res.render('../Views/homeView.ejs',{title:[1,2,3,4,5,6,7]})
})
app.use('',useRouter)





app.listen(port,()=>console.log(`Effect java script port ${port}`))