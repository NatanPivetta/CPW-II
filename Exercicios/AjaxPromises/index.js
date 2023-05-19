async function newRequest(method, url){
    return new Promise ((res, rej) => {

        var xml = new XMLHttpRequest();

        xml.onreadystatechange = () => {
            if (xml.readyState == 4 && xml.status == 200){
                res(JSON.parse(xml.responseText));
                console.log("Requsição com sucesso");
            }else{
            }
        }

        xml.open(method,url, true);

        xml.send();

    });
}

var url = "imagens.json";

async function main(){

    try{
        let response = await newRequest('GET', url);
        var img = response.animals[Math.floor(Math.random() * response.animals.length)]
        addImage(img);
    }catch (error){
        console.log(error);
    }
    
}

function addImage(img){
    var divImages = document.getElementById("images");
    var tagImg = document.createElement("img");
    tagImg.src = img.imagemUrl;
    tagImg.alt = img.name;
    tagImg.width = "400";
    tagImg.height = window.innerHeight;
    divImages.appendChild(tagImg);
}


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      main();
      console.log("scroll");
    }
  };

