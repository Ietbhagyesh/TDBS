import axios from 'axios';

const EPASS_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/users";
const USER_API_BASE_URL = "http://localhost:8080/spring-mvc-boot/users/login";
class UserService{
    loginUser(user) {
        
      
//backend login URL
return axios.post("http://localhost:8080/spring-mvc-boot/users/login",user)
.then(response => {
       
    if (response) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
return response;
});
    }


    createUser(user){
        return axios.post(EPASS_API_BASE_URL,user)
    }
    getUserById(userId){
        return axios.get(EPASS_API_BASE_URL+'/'+userId)
    }
    updateUser(user,userId){
        return axios.put(EPASS_API_BASE_URL+ '/' +userId,user);
    }

    makePayment(payment){
       
        return axios.post("http://localhost:8080/spring-mvc-boot/users/donate",payment)
            .then(response => {
       
                if (response) {
                    localStorage.setItem("payment", JSON.stringify(response.data));
                }
            return response;
            });
    }

    getAllDonations(){
        return axios.get("http://localhost:8080/spring-mvc-boot/users/donation");
    }

      getDonationDetailsId(donationId){
        return axios.get("http://localhost:8080/spring-mvc-boot/users"+ '/' +donationId)
    }
}
export default new UserService()