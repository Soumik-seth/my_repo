const API = process.env.REACT_APP_API_URL;

// ✅ always get latest token
const getToken = () => localStorage.getItem("token");

// ---------- AUTH ----------
export const login = (data) =>
  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

export const registerUser = (data) =>
  fetch(`${API}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(res => res.json());

// ---------- USER ----------
export const getBooks = () =>
  fetch(`${API}/books`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json());

export const borrowBook = (id) =>
  fetch(`${API}/books/borrow/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json());

export const returnBook = (id) =>
  fetch(`${API}/books/return/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json());

// ---------- ADMIN ----------
export const addBook = (data) =>
  fetch(`${API}/admin/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const deleteBook = (id) =>
  fetch(`${API}/admin/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json());

export const getAllBooksAdmin = () =>
  fetch(`${API}/admin/all`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  }).then(res => res.json());
