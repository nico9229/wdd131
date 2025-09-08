const today = new Date();
const year = today.getFullYear();
document.getElementById("currentyear").textContent = year; 
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "last Modified: " + lastModified;