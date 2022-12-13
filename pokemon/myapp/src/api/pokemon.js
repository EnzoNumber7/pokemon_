
export const getPoke = async () => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    );
    const pokemons = await response.json()
    return pokemons
}


export const getType = async () => {
    const response = await fetch(
        'http://localhost:4444/types/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    );
    const types = await response.json()
    return types
}

export const addPokedex = async (name,type,numero,image) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(name,type,numero,image)
        }
    );
    return response.ok;
}

export const delPoke = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...name}) },
        );
    return response.ok;
}

export const getPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
            method: 'GET', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            }
        }
    );
    const pokedex = await response.json()
    return pokedex
}

export const delPokedex = async (name) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify({...name}) },
        );
    return response.ok;
}

export const updatePoke = async (name,type,numero,image) => {
    const response = await fetch(
        'http://localhost:4444//pokemon/update', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(name,type,numero,image)
        }
    );
    return response.ok;
}

export const addPoke = async (name,type,numero,image) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
            method: 'POST', 
            headers: {
                'Accept': 'application/json', 
                'Content-Type':'application/json'
            },
            body: JSON.stringify(name,type,numero,image)
        }
    );
    return response.ok;
}