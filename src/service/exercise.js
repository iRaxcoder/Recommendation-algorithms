import axios from "axios";

const exercise = {
    getLearningStyle: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/learning-style", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    },
}
export default exercise;