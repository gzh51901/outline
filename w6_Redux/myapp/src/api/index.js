import axios from 'axios';

// axios.defaults.baseURL = 'https://www.nanshig.com/mobile';
var instance = axios.create({
    baseURL: 'https://www.nanshig.com/mobile'
});

function getData(url,options={}){
    return instance(url,options);
}

export {
    getData,
    axios
}