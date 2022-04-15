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
    getOriginPlace: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/origin-place", { data })
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
    getStudentSex: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/student-sex", { data })
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
    getGuessStyle: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/guess-style", { data })
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
    getProfessorType: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/professor-type", { data })
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
    getClassType: async (data) => {
        //loading.style.display="block";
        const response = await axios.post("http://localhost:3050/class-type", { data })
            .then((response) => {
                return response.data;
            }).catch(error => {
                console.log(error);
            })
            .finally(() => {
                //loading.style.display="none";
            });
        return response;
    }
}
export default exercise;