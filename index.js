import mongose from 'mongoose'
import app from './app.js'
(
    async()=>{
        try{
            mongose.connect("mongodb://localhost:27017/prashantFolder")
            console.log("connected")
            const onlisten=()=>{
                console.log("listening port 500")
            }
            app.listen(500,onlisten)

        }catch(e){
            console.log("connect erroe")

        }
    }
    
)()