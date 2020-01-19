const Dev = require('../models/Dev');
const axios = require('axios');
const StringToArray = require('../utils/StringtoArray');
const {findConnections, sendMessage} = require('../websocket');
module.exports = {

    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },
    async store(req, res) {
        const { github_username, techs, latitude, longitude } = req.body;
        let dev = await Dev.findOne({ github_username });
        if (!dev) {
            const response = await axios.get(`http://api.github.com/users/${github_username}`);
            const { name = login, avatar_url, bio } = response.data;

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }
            const dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: StringToArray(techs),
                location
            })
            const sendSocketMessageTo= findConnections(
                {latitude,longitude},StringToArray(techs));
            
            sendMessage(sendSocketMessageTo,'new-dev',dev);
        }
        dev = await Dev.findOne({ github_username });
        return res.json(dev);
    }
};