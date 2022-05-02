// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
 import navbar from "../components/navbar.js";
 document.getElementById("navbar").innerHTML = navbar();

 import {searchNews, append} from "./fetch.js";
 let search = (e) =>{
     if(e.key === "Enter"){
         searchNews().then((data) =>{
             console.log(data);
             let container = document.getElementById("results");
             container.innerHTML=null;
             append(data.results, container);
         });
     }
 };

 document.getElementById("query").addEventListener("keydown", search);

 let sidebar = document.getElementById("sidebar").children;

 function cSearch(){
     console.log(this.id);
     searchNews().then((data)=>{
        let container = document.getElementById("results");
        container.innerHTML=null
        append(data.results, container);
     })
 }

 for(let el of sidebar){
     el.addEventListener("click", cSearch);
 }