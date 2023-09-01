import mongoose from 'mongoose';

const dateSchema = new mongoose.Schema({
    descripcion:{
        type: String,
        required: true,
    },
    Service: {
        type: String,
        required: true,
    },
    date:{
        type: String,
    },
    hour:{
        type: String,
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