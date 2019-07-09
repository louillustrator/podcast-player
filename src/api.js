const axios = require("axios");

export const fetchEpisodes = userId => {
  return axios
    .get(`https://api.spreaker.com/v2/users/${userId}/episodes?limit=10`)
    .then(res => {
      return res.data;
    });
};

// export const playEpisode = episodeId => {
//   return axios.get(`https://api.spreaker.com/v2/episodes/${episodeId}/play`);
// };
