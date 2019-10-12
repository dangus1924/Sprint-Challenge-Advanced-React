import { useState, useEffect }from 'react';
import axios from './axios';

function getAxios() {
    const [value, setValue] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:5000/api/players')
        .then(res => setValue(res.data))
        .catch(err => console.log('error:', err))
    })
    return [value, setValue]
    
}
 export default getAxios;
