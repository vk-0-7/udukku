var axios = require("axios");

const createLyrics = async (
  coverPhoto,
  songName,
  artistName,
  genre,
  // subgenre,
  lyrics,
  aboutArtist,
  peopleInvolved,
  socialMedia,
  youtubeVideoLink
) => {
  var data = JSON.stringify({
    coverPhoto,
    songName,
    artistName,
    genre,
    // subgenre,
    lyrics,
    aboutArtist,
    peopleInvolved,
    socialMedia,
    youtubeVideoLink,
  });

  var config = {
    method: "post",
    url: "https://udukku-test.herokuapp.com/lyrics/create-lyrics",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  return await axios(config);
};
export default createLyrics;
