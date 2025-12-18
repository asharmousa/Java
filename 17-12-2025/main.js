document.getElementById("save").onclick =function(){
 let fname = document.getElementById("fname").value;
 let lname = document.getElementById("lname").value;

localStorage.setItem("fname",fname);
localStorage.setItem("lname",lname);

sessionStorage.setItem("fname", fname);
sessionStorage.setItem("lname",lname);
};

// document.getElementById("delete").onclick =function(){
// localStorage.clear();
// localStorage.removeItem("fname");
// localStorage.removeItem("lname");
// sessionStorage.clear();
// sessionStorage.removeItem("fname");
// sessionStorage.removeItem("lname");
// };

 function deleteText()
 {
localStorage.clear();
localStorage.removeItem("fname");
localStorage.removeItem("lname");
sessionStorage.clear();
sessionStorage.removeItem("fname");
sessionStorage.removeItem("lname");

 }