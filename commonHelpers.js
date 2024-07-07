import{S as m,i as n}from"./assets/vendor-8c59ed88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c="/goit-js-hw-11/assets/error-ed7f5b38.svg",l={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function f(o){return fetch(`${l.url}?key=${l.key}&orientation=${l.orientationPhoto}&image_type=${l.typeImage}&per_page=${l.quantität}&safesearch=${l.safesearch}&q=${o}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function u(o){const t=document.querySelector(".gallery");t.innerHTML="";const s=images.map(({largeImageURL:i,previewURL:e,likes:r,views:a,comments:p,downloads:h})=>`<li class="gallery-item">
        <a href="${i}">
          <img src="${webformatURL}" alt="" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${r}</p>
          </li>
          <li>
            <p class="count-text">Views</p>
            <p class="count">${a}</p>
          </li>
          <li>
            <p class="count-text">Comments</p>
            <p class="count">${p}</p>
          </li>
          <li>
            <p class="count-text">Downloads</p>
            <p class="count">${h}</p>
          </li>
        </ul>
      </li>
      `).join("");t.insertAdjacentHTML("afterbegin",s),new m(".gallery a",{captionsData:"alt",captionDelay:250})}let d=document.querySelector("#name-input");const y=document.querySelector(".form");document.querySelector(".card-container");const w=document.querySelector(".gallery"),g=document.querySelector(".loader");y.addEventListener("submit",C);function C(o){o.preventDefault(),g.classList.remove("visually-hidden");const s=o.currentTarget.elements.query.value.toLowerCase();if(s==="")n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:c});else{console.log(s),d.value="";let i=s.toLowerCase();f(i).then(e=>{let r=e.hits;console.log(r),b(r),u(e.hits),g.classList.add("visually-hidden")}).catch(L)}}function L(o){n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:c})}function S(){w.innerHTML=""}function b(o){if(S(),o.length===0)return g.classList.add("visually-hidden"),n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:c});o.length<40&&n.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:c,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"}),u()}
//# sourceMappingURL=commonHelpers.js.map
