
export async function getAllUsers() {

    const response = await fetch('/api/users');
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/user`, {
        mode: 'cors',
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'
        },
        body: JSON.stringify({user: data})
      })
    return await response.json("done");
}