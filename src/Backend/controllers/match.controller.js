import { jobs, candidates } from '../models/index.js';
import StringList from '../utils/string_array.util.js';

const MatchController = {
    async post(req, res) {
        var candidates_raw = await candidates.get({ id: req.body.candidates_id });
        var jobs_raw = await jobs.get({ id: req.body.jobs_id });
        var jobs_data = undefined
        var candidates_data = undefined
        console.log("Teste ", jobs_raw, candidates_raw)
        var data = {
            jobs_data_hs: jobs_raw[0].requireds_hardskill,
            jobs_data_ss: jobs_raw[0].requireds_softskill,
            candidates_data_hs: candidates_raw[0].hardskills,
            candidates_data_ss: candidates_raw[0].softskills
        }
        console.log("Data aqui ", data)
        console.log("Hardskills ", parseFloat(StringList.matchsPorcent(data.jobs_data_hs, data.candidates_data_hs)))
        console.log("SoftSkills ", parseFloat(StringList.matchsPorcent(data.jobs_data_ss, data.candidates_data_ss)))
        var percentage = (parseFloat(StringList.matchsPorcent(data.jobs_data_hs, data.candidates_data_hs)) + parseFloat(StringList.matchsPorcent(data.jobs_data_ss, data.candidates_data_ss))) / 2;
        console.log(percentage.toFixed(2))
        res.json(parseFloat(percentage.toFixed(2)))
    }
}
export default MatchController;