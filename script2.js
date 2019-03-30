const fetch = require("node-fetch");

const getPeoplePromise = (fetch = fetch) => {
  return fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(({ count, results }) => ({ count, results }));
};

const getPeople = async (fetch = fetch) => {
  const getRequest = await fetch("https://swapi.co/api/people");
  const { count, results } = await getRequest.json();
  return { count, results };
};

module.exports = { getPeople, getPeoplePromise };
