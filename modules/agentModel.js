import mongoose from "mongoose";

const agentSchema = new mongoose.Schema({
    agentName: {
        type: String,
        // required: true,
        unique: true
    },
    agentRole: {
        type: String,
        required: true
    },
    agentGender: {
        type: String,
        required: true
    },
    agentAccessibility: {
        type: String,
        default: "From beginning"
    },
}, {
    timestamps: true
});

export default mongoose.model('agent', agentSchema);