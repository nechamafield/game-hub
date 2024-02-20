import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '4842eaf27afd4d02bb6186c5ae812651'
    }
})