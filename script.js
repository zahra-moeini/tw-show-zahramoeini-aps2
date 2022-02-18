const Seclector = document.querySelector("#episodeSelector");
const secrch = document.querySelector("#secrch");
async function getdata(){
  const data=await axios("https://api.tvmaze.com/shows/527/episodes");
  const movies=data.data;
  console.log(movies);
            for (const iterator of movies) {
              // console.log(iterator);
              // link iamge
              const linkimag = iterator.image.medium;
              // season
              const season = iterator.season;
              // motghir min10 01
              //if season min 10=> 0
              let stringseason = `${season}`;
              if (season < 10) {
                stringseason = `0${season}`;
              }
              //number
              const number = iterator.number;
              //min 10 =>01
              let StringNumber = `${number}`;
              if (number < 10) {
                StringNumber = `0${number}`;
              }
              // name file
              const name = iterator.name;
              // sammary file
              const sammary = iterator.summary;
              //link
              const link = iterator.url;
              // console.log(link);
              // console.log(sammary);
              // console.log(number);
              // console.log(season);
              //Create div as api image size
              const Cart = document.createElement("div");
              // cart class
              Cart.classList.add("card");
              //ceart p
              const P = document.createElement("p");
              //add class p
              P.classList.add("name");
              //text conntent p
              P.textContent = `name:${name}-S${stringseason}E${StringNumber}`;
              //append p
              Cart.append(P);
              //create image
              const image = document.createElement("img");
              //setattribute src image
              image.setAttribute("src", `${linkimag}`);
              //appen image info cart
              Cart.append(image);
              // sammary file crate p
              const Psammmary = document.createElement("p");
              Psammmary.innerHTML = `summary:${sammary}`;
              //append p tag div cart
              Cart.append(Psammmary);
              // add class Psammmary
              Psammmary.classList.add("Psammmary");
              // create a Click here to go to the site
              const a = document.createElement("a");
              //setAttribute src
              a.textContent = "Click here to go to the site";
              a.setAttribute("href", `${link}`);
              a.setAttribute;
              //append a cart
              Cart.append(a);

              //append cart info rot
              rot.append(Cart);
              //  console.log(rot);

              // sealectorrrr   name:${name}-S${stringseason}E${StringNumber}

              let title = `<option value="${iterator.name}-S${stringseason}E${StringNumber}">${iterator.name}-S${stringseason}E${StringNumber}</option>`;
              Seclector.innerHTML += title;
            }

              const cart = document.querySelectorAll(".name");
              // console.log(cart);
              Seclector.addEventListener('change',(e)=>{
                for (const iteratorr of cart) {
                  iteratorr.parentElement.style.display = "";
                  if (e.target.value !== "all") {
                    if(e.target.value!==iteratorr.textContent.slice(5)){
                    iteratorr.parentElement.style.display="none";
                    }
                  }
                }
              })
               secrch.addEventListener('input',(e)=>{
                 for (const iterator of cart) {
                   iterator.parentElement.style.display="";
                   if (!iterator.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                       iterator.parentElement.style.display = "none";
                   }
                 }
               })
            }
getdata()
