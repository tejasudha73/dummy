import axios from 'axios';

const utils = {
    getJoke : (text)=>{
        return axios.get('https://icanhazdadjoke.com/',
        	{
        		headers:{
        			Accept: "application/json"
        		}
        	}
        );
    }
}

export default utils;