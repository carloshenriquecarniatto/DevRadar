const Dev = require('../models/Dev');
const StringToArray = require('../utils/StringtoArray');
module.exports = {
    async index(req, res) {
        let { latitude, longitude, techs } = req.query;
        const techsArray = StringToArray(techs);
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 1000000,
                }
            }
        });
        return res.json({ devs });
    }

}