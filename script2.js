const fetch = require("node-fetch");

const getPeoplePromise = () => {
  return fetch("https://swapi.co/api/people")
    .then(response => response.json())
    .then(({ count, results }) => ({ count, results }));
};

const getPeople = async () => {
  const getRequest = await fetch("https://swapi.co/api/people");
  const { count, results } = await getRequest.json();
  return { count, results };
};

module.exports = { getPeople, getPeoplePromise };
