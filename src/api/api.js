export const getAllCharactersReq = async () => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/characters`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const getSpecieReq = async (specie, id) => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/${specie}/${id}`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const getAllCreaturesReq = async () => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/creatures`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};

export const getAllDroidssReq = async () => {
  try {
    const response = await fetch(
      `https://starwars-databank-server.vercel.app/api/v1/droids`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const responseJson = await response.json();
      return responseJson.data;
    } else {
      return {
        error: { status: response.status, statusText: response.statusText },
      };
    }
  } catch (error) {
    console.log("Oh No! There was a problem: \n", error);
  }
};
