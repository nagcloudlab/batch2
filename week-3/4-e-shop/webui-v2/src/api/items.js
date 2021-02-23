import axios from 'axios';

const baseUrl = "http://localhost:8080/api/items"

export function getItems() {
    return axios.get(baseUrl)
        .then(response => response.data)
}

export function getReviews(itemId) {
    const apiUrl = `${baseUrl}/${itemId}/reviews`
    return axios.get(apiUrl)
        .then(response => response.data)
}