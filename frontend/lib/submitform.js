
import axios from 'axios'
export default async function submitUserData(data) {
    let url = '/api/submitform';
    console.log(url);
    const res = await axios.post(url, data);
    console.log(res);

    return res;
}