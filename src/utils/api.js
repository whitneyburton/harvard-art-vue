import apiKey from '../../api_key';

export const fetchData = async () => {
  const url = `https://api.harvardartmuseums.org/person?apikey=${apiKey}&page=1`;
  const response = await fetch(url);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message);
  }
  console.log(response)
  return await response;
}