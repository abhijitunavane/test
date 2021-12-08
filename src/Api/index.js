import axios from "axios";

const link = "https://testbackendjs.herokuapp.com/";

export const getHello = async () => {
    const data = await axios.get(link);
    console.log(data);
    return data;
}

export const getName = async (name) => {
    return await axios.get(link + name);
}