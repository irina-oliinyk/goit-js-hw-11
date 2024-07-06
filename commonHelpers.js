import{i as n}from"./assets/vendor-ad859c2f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c="/goit-js-hw-11/assets/error-ed7f5b38.svg",a={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function f(t){return fetch(`${a.url}?key=${a.key}&orientation=${a.orientationPhoto}&image_type=${a.typeImage}&per_page=${a.quantität}&safesearch=${a.safesearch}&q=${t}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})}let g=document.querySelector("#name-input");const h=document.querySelector(".form"),u=document.querySelector(".card-container");function m(t){return u.innerHTML="",t.map(({largeImageURL:o,previewURL:s,likes:i,views:e,comments:r,downloads:l})=>`<ul class="gallery">
          <li class="gallery-item">
           <a class="gallery-link" href="${o}">
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
        </ul>
      `).join("")}h.addEventListener("submit",d);function d(t){t.preventDefault(),p();const s=t.currentTarget.elements.query.value.toLowerCase();s===""?alert("Error"):(console.log(s),g.value="");let i=s.toLowerCase();f(i).then(e=>{let r=e.hits;console.log(r),w(r),u.insertAdjacentHTML("afterbegin",m(r))}).catch(y)}function y(t){n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"})}function p(){u.innerHTML=""}function w(t){p(),t.length===0?n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!"}):t.length<40&&n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"})}
//# sourceMappingURL=commonHelpers.js.map
