import axios from "axios";

const API_BASE_URL = "http://localhost:8111";

export const fetchAlcohols = async (category, sortBy) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/alcohol/selectalcohol`, {
      params: { name: category, sortBy },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching alcohols:", error);
    throw error;
  }
};

export const searchAlcohols = async (category, searchTerm) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/search/selectsearch`, {
      params: { search: searchTerm, category },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching alcohols:", error);
    throw error;
  }
};

export const fetchReviews = async (alcoholName ) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/review/selectreview`, {
      params: { alcohol_name: alcoholName },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    throw error;
  }
};

export const addReview = async (alcoholName, review) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/review/insertreview`, { alcohol_name: alcoholName, review });
    return response.data;
  } catch (error) {
    console.error("Error adding review:", error);
    throw error;
  }
};

export const updateReview = async (alcoholName, review) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/review/updatereview`, { alcohol_name: alcoholName, review });
    return response.data;
  } catch (error) {
    console.error("Error updating review:", error);
    throw error;
  }
};

export const deleteReview = async (alcoholName) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/review/deletereview`, {
      params: { alcohol_name: alcoholName },
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};

export const addScore = (alcoholName, score) => {
  return axios.post(`${API_BASE_URL}/score/add`, { alcoholName, score });
};

export const updateScore = (alcoholName, score) => {
  return axios.put(`${API_BASE_URL}/score/update`, { alcoholName, score });
};

export const fetchAverageScore = (alcoholName) => {
  return axios.get(`${API_BASE_URL}/score/average`, {
    params: { alcoholName },
  });
};

export const fetchJjim = (userId) => {
  return axios.get(`${API_BASE_URL}/jjim`, { params: { userId } });
};

export const addJjim = (alcoholName) => {
  return axios.post(`${API_BASE_URL}/jjim/add`, { alcoholName });
};

export const removeJjim = (alcoholName) => {
  return axios.delete(`${API_BASE_URL}/jjim/remove`, {
    params: { alcoholName },
  });
};
