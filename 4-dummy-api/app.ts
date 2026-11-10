enum ResponseStatus {
    SUCCESS = 200,
    ERROR = 400,
}

interface IUser{
    id: number;
    firstName: string;
    lastName: string;
    maidenName?: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate?: string;
    image?: string;
    bloodGroup?: string;
    height?: number;
    weight?: number;
    eyeColor?: string;
    hair?: string;
    ip?: string;
    address?: {
        address: string;
        city: string;
        postalCode: string;
        state: string;
    }
    macAddress?: string;
    university?: string;
    bank?: {
        cardExpire: string;
        cardNumber: string; 
    }
    company?: {
        name: string;
        department: string;
        title: string;
    }
    ein?: string;
    ssn?: string;
    userAgent?: string;
    crypto?: {
        currency: string;
        amount: string;
        price: string;
    }
    role?: string;
}

interface IUsersResponse {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}

async function sendRequest(url:string){
    try {
        const response = await fetch(url, {
            method: 'GET',
        })
         if (response.status !== ResponseStatus.SUCCESS) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        const result: IUsersResponse = await response.json();
        return result;
    } catch (error) {
        throw new Error(`Ошибка при выполнении запроса: ${error}`);
    }
}

sendRequest('https://dummyjson.com/users')
    .then(data => data.users.forEach(u =>
        console.log(`${u.firstName} ${u.lastName}, ${u.age}, ${u.email}`)
    ))
    .catch(error => console.error(error));