import mongoose from "mongoose"
import { envVar } from "./envVariables"

const url:string = envVar.MONGO_URL

export const db =() => {
    mongoose.connect(url).then(() => {
        console.log("database is connected")
    })
}