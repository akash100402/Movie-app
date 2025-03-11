const API_KEY = "a02e68d5992f7f9d10ac307f0c03dc01";
const BASE_URL = "https://api.themoviedb.org/3"

// access token=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMDJlNjhkNTk5MmY3ZjlkMTBhYzMwN2YwYzAzZGMwMSIsIm5iZiI6MTc0MTM5OTI2MS41MDQsInN1YiI6IjY3Y2JhNGRkN2M5NjdlMDRkNTViOTdkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pL-yQs_Do9pJJ_jkUGAQGoeqBkdCS4ofnP2Nzw30sSg

export const getPopularMovies = async()=>{
    const response = await fetch(`${BASE_URL}/moie/popular?api_key=${API_KEY}`);
    const data = await response.json()
    return data.results
};

export const searchMovies = async(query)=>{
    const response = await fetch(`${BASE_URL}/moie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
    const data = await response.json()
    return data.results
};

