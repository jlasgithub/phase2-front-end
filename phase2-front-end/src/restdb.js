let people = [
    {
        name: "spongebob ",
        email: "chris.@chris.com",
        password: "rainbows"
    },
    {
        name: "bob smith",
        email: "bob.smith@poolhouse.com",
        password: "sunshine"
    }
]

const baseURL = 'http://localhost:4000/customers';
export async function getAll(setCustomers) {
    const myInit = {
        method: 'GET',
        mode: 'cors'
    };
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchData(baseURL);
}

export async function post(setCustomers) {
    const myInit = {
        method: 'GET',
        mode: 'cors'
    };
    const fetchData = async (url) => {
        try {
            const response = await fetch(url, myInit);
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            const data = await response.json();
            setCustomers(data);
        } catch (error) {
            alert(error);
        }
    }
    fetchData(baseURL);
}
