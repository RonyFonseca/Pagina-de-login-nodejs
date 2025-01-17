import mongoose from "mongoose"

const main = async() => {
    await mongoose.connect("mongodb://127.0.0.1:27017/getapet")
    console.log("Você conectou ao mongoose !")
}

main().catch((err) => console.log(err))

export default mongoose