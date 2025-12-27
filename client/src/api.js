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
