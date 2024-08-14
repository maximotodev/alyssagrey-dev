import querystring from 'querystring';

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const artist_id = process.env.ARTIST_ID
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

export const getAccessToken = async () => {
  
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });
  return response.json();
};

const GET_ARTIST_ENDPOINT = 
`https://api.spotify.com/v1/artists/${artist_id}`

export const getArtist = async () => {
  
  const { access_token } = await getAccessToken();
  return fetch(GET_ARTIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/artists/${artist_id}/top-tracks`;

export const getTopTracks = async () => {
  
  const { access_token } = await getAccessToken();
  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

export const getNowPlaying = async () => {

  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`
    }
  });
};

const ALBUMS_ENDPOINT = `https://api.spotify.com/v1/artists/${artist_id}/albums?offset=0&limit=10&include_groups=album,single`;

export const getAlbums = async () => {

  const { access_token } = await getAccessToken();

  return fetch(ALBUMS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};