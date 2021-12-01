import axios from 'axios';

export const fetchInspirationDataFromApi = async () =>
  axios(process.env.INSPIRATION_API_URL).then((res) => {
    const allFetchedQuotes = res.data;

    return () =>
      allFetchedQuotes[Math.floor(Math.random() * allFetchedQuotes.length)];
  });
