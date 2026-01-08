const API = process.env.REACT_APP_API_URL;

export const login = (data)=>fetch(`${API}/auth/login`,{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify(data)
}).then(r=>r.json());

export const registerUser = (data)=>fetch(`${API}/auth/register`,{
  method:"POST",
  headers:{ "Content-Type":"application/json" },
  body:JSON.stringify(data)
}).then(r=>r.json());

//for get all books
export const getBook = (token)=>{
  fetch(`${API}/books`,{
  method:"GET",
  headers:{Authorization:`Bearer ${token}` }
  }
  ).then(r=>r.json())};

// for brrow book
export const borrowBook = (id,token)=>{
  fetch(
    `${API}/books/borrow/${id}`,{
      method:"POST",

    }
  ).then(r=>r.json());
}
// for return book
export const returnBook =(id,token)=>{
  fetch(`${API}/books/return/${id}`,{
    method:"POST",
    headers:{Authorization:`Bearer ${token}` }
  }
  ).then(r=>r.json())
}
/// Admin APIs
const AdminAddBook =(data,token)=>{
  fetch(`${API}/book/add`,{
    method:"POST",
    headers:{
      "content-Type":"application/json",
      Authorization:`Bearer ${token}`
    },
    body:JSON.stringify(data)

  }).then(r=>r.json());
};
//Admin delete book
const AdminDeleteBook = (id,token)=>{
  fetch(`${API}/books/delete/${id}`,{
    method:"DELETE",
    headers:{Authorization:`Bearer ${token}` }
  }).then(r=>r.json());
};
//admin get all books
export const adminGetBooks = (token) =>
  fetch(`${API}/admin/all`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then(res => res.json());