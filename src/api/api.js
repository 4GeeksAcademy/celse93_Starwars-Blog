export const getAllCharactersReq = async () => {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/people/`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.results;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};


export const getCharacterReq = async (id) => {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/people/${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.result.properties;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};


export const getAllPlanetsReq = async () => {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/planets/`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.results;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};


export const getPlanetReq = async (id) => {
  try {
    const response = await fetch(
      `https://www.swapi.tech/api/planets/${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.result.properties;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};