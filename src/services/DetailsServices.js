import axios from "axios";

export const getOneCar = async (id) => {
  try {
    const response = await axios.get(
      `https://fohggt0wwd.execute-api.us-east-1.amazonaws.com/Prod/get_one_car/?id_auto=${id}`
    );    
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
