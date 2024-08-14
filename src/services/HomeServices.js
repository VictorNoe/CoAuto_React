import axios from "axios";

export const getCars = async () => {
  try {
    const response = await axios.get(
      "https://syr3x8vt0g.execute-api.us-east-1.amazonaws.com/Prod/get_data_cars"
    );
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
