const API = process.env.REACT_APP_API_URL;
const token = localStorage.getItem("token");

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

export const getBooks = () =>
  fetch(`${API}/books`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const borrowBook = (id) =>
  fetch(`${API}/books/borrow/${id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const returnBook = (id) =>
  fetch(`${API}/books/return/${id}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const addBook = (data) =>
  fetch(`${API}/admin/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(data)
  }).then(res => res.json());

export const deleteBook = (id) =>
  fetch(`${API}/admin/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());

export const getAllBooksAdmin = () =>
  fetch(`${API}/admin/all`, {
    headers: { Authorization: `Bearer ${token}` }
  }).then(res => res.json());
