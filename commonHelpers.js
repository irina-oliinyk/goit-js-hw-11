import{i as n,S as f}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c="/goit-js-hw-11/assets/error-ed7f5b38.svg",a={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function m(o){return fetch(`${a.url}?key=${a.key}&orientation=${a.orientationPhoto}&image_type=${a.typeImage}&per_page=${a.quantität}&safesearch=${a.safesearch}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p(o){return clearGallery(),o.map(({largeImageURL:t,previewURL:s,likes:i,views:e,comments:r,downloads:l})=>`<li class="gallery gallery-item">
           <a class="gallery-link" href="${t}">
            <img src="${s}" alt="" width="300" height="140"/> 
            </a>
                <ul class="galery-item-description">
                    <li>
                        <p class="paragraf">Likes</p>
                        <p class="value">${i}</p>
                    </li>
                    <li>
                        <p class="paragraf">Views</p>
                        <p class="value">${e}</p>
                    </li>
                    <li>
                        <p class="paragraf">Comments</p>
                        <p class="value">${r}</p>
                    </li>
                    <li>
                        <p class="paragraf">Downloads</p>
                        <p class="value">${l}</p>
                    </li>
                </ul>
           </li>   
      `).join("")}let d=document.querySelector("#name-input");const y=document.querySelector(".form");document.querySelector(".card-container");const u=document.querySelector(".gallery-conteiner"),g=document.querySelector(".loader");y.addEventListener("submit",w);function w(o){o.preventDefault(),g.classList.remove("visually-hidden");const s=o.currentTarget.elements.query.value.toLowerCase();if(s==="")n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:c});else{console.log(s),d.value="";let i=s.toLowerCase();m(i).then(e=>{let r=e.hits;console.log(r),b(r),g.classList.add("visually-hidden")}).catch(C)}}function C(o){n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:c})}function v(){u.innerHTML=""}function b(o){if(v(),o.length===0)return g.classList.add("visually-hidden"),n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:c});o.length<40&&n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"}),u.insertAdjacentHTML("afterbegin",p(o))}var h=new f(".gallery-item a",{captionsData:"alt",captionDelay:250,preloading:!0});console.log(h);h.refresh();
//# sourceMappingURL=commonHelpers.js.map
