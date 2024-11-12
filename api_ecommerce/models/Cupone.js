import mongoose,{Schema} from "mongoose";

const CuponeSchema = new Schema({
    code:{type:String,maxlength:50,required:true},
    type_discount:{type:Number,required:true,default: 1}, //por moneda 1 o por porcentaje 2
    discount:{type:Number,required:true},
    type_count:{type:Number,required:true,default:1},
    num_use:{type:Number,required:false},
    type_segment:{type:Number,requierd:false,default:1},
    state:{type:Number,required:false,default: 1},//1 es activo
    products:[{type:Object}],
    categories:[{type:Object}]
},{
    timestamps:true
})

const Cupone = mongoose.model("cupones",CuponeSchema);
export default Cupone;