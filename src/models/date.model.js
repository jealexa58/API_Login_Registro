import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema({
    description:{
        type: String,
        required: true,
        
    },
    service: {
        type: String,
        required: true,

    },
    date:{
        type: String,
        required: true,
    },
    hour:{
        type: String,
        required: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
},{
    timestamps: true
}
);

export default mongoose.model("Date", dateSchema);