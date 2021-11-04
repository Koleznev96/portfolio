const errorHandler = require('../../utils/errorHandler');
const User = require('../../models/User');
const Site = require('../../models/Site');
const DataSite = require('../../models/DataSite');


module.exports.get_sites = async function(req, res) {
    try {
        const sites = await Site.find();
        let data = [];
        let data_new = [];
        for (const site of sites) {
            data.push((await (await DataSite.find({site_id: site._id})).sort(function(a,b){
                return new Date(b.date) - new Date(a.date)
            })).reverse())
        }
        let days = [];
        for (const item of data[0]) {
            days.push(item.day);
        }
        for (const item of data) {
            let hop = [];
            for (const st of item) {
                hop.push(st.data);
            }
            data_new.push({
                label: item[0].label,
                data: hop
            });
        }
        return res.status(201).json({data: data_new, days, sites});
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.creat_site = async function(req, res) {
    try {
        const user = await User.findOne({_id: req.user.id});
        if (!user.isAdmin) {
            return res.status(404).json('No you Admin');
        }
        const site = new Site({
            label: req.body.label,
            description: req.body.description,
            url: req.body.url,
            visits_today: 0,
            visits_all: 0,
        });
        await site.save();
        return res.status(201).json(site);
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}

module.exports.visit = async function(req, res) {
    try {
        const {label} = req.body;
        let site = await Site.findOne({label});
        if (site) {
            site.visits_today = site.visits_today + 1;
            site.visits_all = site.visits_all + 1;
            await site.save();
        }
        res.status(201).json("OK");
    } catch(e) {
        errorHandler(res, e);
        throw e;
    }
}
