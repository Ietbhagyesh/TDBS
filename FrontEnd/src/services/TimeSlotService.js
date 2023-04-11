import axios from 'axios';

const TIMESLOT_API_BASE_URL = "http://localhost:8080/timeslot/"
class TimeSlotService{

    getAllTimeSlot(){
        return axios.get(TIMESLOT_API_BASE_URL).then(response => {
       
            if (response) {
                localStorage.setItem("allslot", JSON.stringify(response.data));
            }
        return response;
        });
    }

    

    createTimeSlot(timeslot,templeId){
        console.log('In timeslotService =>' + templeId);
        return axios.post(TIMESLOT_API_BASE_URL+'temple/'+templeId,timeslot)
            .then(response => {
       
                if (response) {
                    localStorage.setItem("timeslot", JSON.stringify(response.data));
                }
            return response;
            });
                }

    deleteTimeSlot(slotId){
        return axios.delete(TIMESLOT_API_BASE_URL  +slotId);

    }
    getTimeSlotById(slotId){
        return axios.get(TIMESLOT_API_BASE_URL +slotId)
        
    }
    getSlotByTempleId(templeId){
        console.log('in timeslot service');
        return axios.get(TIMESLOT_API_BASE_URL+'temple/' +templeId)
        
        
    }
}
export default new TimeSlotService()