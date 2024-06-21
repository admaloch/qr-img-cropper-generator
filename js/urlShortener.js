function formatURL(input) {
    let formattedURL = input.trim(); // Trim whitespace
    if (!formattedURL.startsWith("http://") && !formattedURL.startsWith("https://")) {
        formattedURL = "https://" + formattedURL; // Prepend default protocol if missing
    }
    return formattedURL;
}

const API_KEY = 'sk_78679d2b538f409992feb3a7a16e15be'

async function shortenURL(url) {
    const inputBody = JSON.stringify({
        url: url,
        expiry: '525600m'
    });
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-api-key': API_KEY
    };
    try {
        const response = await fetch('https://api.manyapis.com/v1-create-short-url', {
            method: 'POST',
            body: inputBody,
            headers: headers
        });
        const data = await response.json();
        if (response.ok) {
            return data.shortUrl;
        } else {
            throw new Error(data.error);
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
}