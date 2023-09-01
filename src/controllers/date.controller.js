import Date from '../models/date.model.js'


export const getDates = async (req, res) => {
    const dates = await Date.find();
    res.json(dates);
};
    

export const createDates = async (req, res) => {
    const {description, service, date, hour} = req.body
    const newDate = new Date({
        description,
        service,
        date,
        hour,
        user: req.user.id
    })
    const savedDate = await newDate.save();
    res.json(savedDate);
};

export const getDate = async (req, res) => {
    const date = await Date.findById(req.params.id);
    if(!date) return res.status(404).json({ message: 'Date no found'});
    res.json(date);

};

export const updateDate = async (req, res) => {
    const date = await Date.findByIdAndUpdate(req.params.id, req.body, {new: true});
    if(!date) return res.status(404).json({ message: 'Date no found'});
    res.json(date);
};

export const deleteDate = async (req, res) => {
    const date = await Date.findByIdAndDelete(req.params.id);
    if(!date) return res.status(404).json({ message: 'Date no found'});
    res.json(date);
};
