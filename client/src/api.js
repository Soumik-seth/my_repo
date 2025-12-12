// client/src/api.js
const API_BASE = process.env.REACT_APP_API_URL;

export function getBooks() {
  return fetch(`${API_BASE}/books`)
    .then(res => res.json());
}
