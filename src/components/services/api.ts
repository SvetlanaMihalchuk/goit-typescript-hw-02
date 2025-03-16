import axios from "axios";
import { Image } from "../../types";

const API_URL = "https://api.unsplash.com/search/photos";
const ACCESS_KEY = "heL7gEIcJzw19P3A1E3c3zdQtdQ1dGLR4yvtMlaxvjU"; 

interface ApiResponse {
  results: Image[];
}

export const fetchPictures = async (query: string, page: number, perPage: number): Promise<Image[]> => {
  try {
    const response = await axios.get<ApiResponse>(API_URL, {
      params: {
        client_id: ACCESS_KEY,
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};