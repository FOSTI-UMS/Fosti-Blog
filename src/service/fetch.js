import axios from "axios";

function getData(url){
    axios.get(url)
        .then(res => {
            const result = res;
            return result
        })
}

const getAgain = (pagination) => {
    axios.get("http://api.fostiums.org/getpost?page="+pagination)
        .then(res => {
            const status = res.status;
            const result = res.data;
            return res.data.result.data
        })
}

export {getData,getAgain}
