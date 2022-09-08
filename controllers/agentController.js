import agentModel from "../modules/agentModel.js";

export const createAgent = async (req, res) => {
    try {
        const newAgent = new agentModel(req.body);
        await newAgent.save();
        res.status(201).send("new agent created!");
    } catch (error) {
        res.status(405).send(error);
        console.error(error);
    }
};

export const getAllAgents = async (req, res) => {
    try {
        const allAgents = await agentModel.find();
        res.status(201).json(allAgents);
    } catch (error) {
        console.error(error);
    }
};

export const getAgentById = async (req, res) => {
    try {
        const agent = await agentModel.findById(req.params.id);
        res.status(200).json(agent);
    } catch (error) {
        console.error(error);
    }
};

export const deleteAgentById = async (req, res) => {
    try {
        await agentModel.findByIdAndDelete(req.params.id);
        res.status(200).send('Agent is deleted!');
    } catch (error) {
        console.error(error);   
    }
};

export const updateAgent = async (req, res) => {
    try {
        const updatedAgent = await agentModel.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedAgent);
    } catch (error) {
        console.error(error);
    }
};
