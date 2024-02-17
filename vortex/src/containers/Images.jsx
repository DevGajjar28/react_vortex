// Images.js
import axios from 'axios';

const accessKey = 'zF8Ku92rcNtoldkP2sKie1-Vs8h9B6OK9LIqTKoDrdM';

const fetchImages = async (query) => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query,
        client_id: accessKey,
      },
    });

    return response.data.results;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

export { fetchImages };
