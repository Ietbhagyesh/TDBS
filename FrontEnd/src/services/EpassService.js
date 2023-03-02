import axios from 'axios';

const EPASS_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/epass"
class EpassService{

    getEpass(){
        return axios.get(EPASS_API_BASE_URL);
    }

    createEpass(pass){
        return axios.post(EPASS_API_BASE_URL,pass)
            .then(response => {
       
                if (response) {
                    localStorage.setItem("pass", JSON.stringify(response.data));
                }
            return response;
            });
                }

    deleteEpass(passId){
        return axios.delete(EPASS_API_BASE_URL + '/' +passId);

    }
    getPassById(passId){
        return axios.get(EPASS_API_BASE_URL+ '/' +passId)
    }
}
export default new EpassService()