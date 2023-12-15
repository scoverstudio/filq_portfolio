export const API_URL =
    process.env.NODE_ENV === "production" ? "https://filq-be-2.onrender.com/api" : "localhost:3001/api";

console.log(API_URL);