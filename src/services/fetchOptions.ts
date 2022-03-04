const fetchOptions = async (value: string, limit = 5) => {
  const arrayLimit = limit;

  const url = `https://hotels4.p.rapidapi.com/locations/v2/search?query=${value}&local=en_US&currency=USD`;
  const options = {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "hotels4.p.rapidapi.com",
      "x-rapidapi-key": "gXDfR45LI6msh7UbwzoT87tAuZcRp1K7YyijsnJTlAsVKxcjdv"
    }
  };

  return fetch(url, options)
  .then((response: any) => {
    return response.json();
  })
  .then(data => {
    const cities = data?.suggestions.find(s => s.group === 'CITY_GROUP')?.entities || [];
    const filteredArr = cities.map((item: Record<string, string>) => item.name).slice(0, arrayLimit) || [];
    return filteredArr;
  })
  .catch(err => {
    console.error(err);
    return [];
  });
}

export default fetchOptions;
