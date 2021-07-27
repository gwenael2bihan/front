import axios from 'axios'

const API_URL = "http://localhost:8080/api/";

const charge = (id, amount) => {
    return axios.post(API_URL + "charge", {
        id, 
        amount: 1095
    }).then((res) => { 
        return res.data;
        console.log(res);
    });
};

const ChargeService = {
    charge
}

export default ChargeService;