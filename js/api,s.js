const BASE_URL = "https://bookstore.eraasoft.pro/api";

async function sendRequest(endpoint, method = 'GET', data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    if (data) {
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, options);
        const result = await response.json();
        
        if (response.ok) {
            return { success: true, data: result };
        } else {
            console.error("Error Status:", response.status, result);
            return { success: false, error: result };
        }
    } catch (error) {
        console.error("Network Error:", error);
        return { success: false, error: error };
    }
}