import{i as a}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const c="/goit-js-hw-11/assets/error-ed7f5b38.svg",n={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function f(t){return fetch(`${n.url}?key=${n.key}&orientation=${n.orientationPhoto}&image_type=${n.typeImage}&per_page=${n.quantität}&safesearch=${n.safesearch}&q=${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let g=document.querySelector("#name-input");const h=document.querySelector(".form"),u=document.querySelector(".card-container");function m(t){return u.innerHTML="",t.map(({largeImageURL:o,previewURL:i,likes:s,views:e,comments:r,downloads:l})=>`<ul class="gallery">
          <li class="gallery-item">
           <a class="gallery-link" href="${o}">
            <img src="${i}" alt="" width="300" height="140"/> 
            </a>
                <ul class="galery-item-description">
                    <li>
                        <p>Likes</p>
                        <p>${s}</p>
                    </li>
                    <li>
                        <p>Views</p>
                        <p>${e}</p>
                    </li>
                    <li>
                        <p>Comments</p>
                        <p>${r}</p>
                    </li>
                    <li>
                        <p>Downloads</p>
                        <p>${l}</p>
                    </li>
                </ul>
           </li>
        </ul>
      `).join("")}h.addEventListener("submit",d);function d(t){t.preventDefault(),p();const i=t.currentTarget.elements.query.value.toLowerCase();i===""?alert("Error"):(console.log(i),g.value="");let s=i.toLowerCase();f(s).then(e=>{let r=e.hits;console.log(r),w(r),u.insertAdjacentHTML("afterbegin",m(r))}).catch(y)}function y(t){a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){u.innerHTML=""}function w(t){p(),t.length===0?a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):t.length<40&&a.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"})}
//# sourceMappingURL=commonHelpers.js.map
