const API_BASE = `http://api.tvmaze.com`;

export const getData = async ( queryString ) => {
    const response = await fetch(`${API_BASE}${queryString}`)
        .then(res => res.json());
    return response;
}

