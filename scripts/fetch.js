
let searchNews = async () =>{
try{
    let res = await fetch(`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`);

    let data = await res.json();
    append(data);
    return data;
}catch(err){
    console.log(err)
}
};
searchNews();

let append = (data, container)=>{
    data.forEach(({articles:{ urlToImage }, articles:{ title }, articles:{ description }})=>{
        let div = document.createElement("div");
        div.setAttribute("class", image);

        let img=document.c;reateElement("img");
        let h3 = document.createElement("h3");
        let des = document.createElement("h3");

        img.src = urlToImage
        h3.innerText = description;
        des.innerText = title;

        div.append(img,h3,des);
        container.append(div);
    });
};
export { searchNews,append };