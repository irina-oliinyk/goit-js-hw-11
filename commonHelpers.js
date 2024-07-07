import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="/goit-js-hw-11/assets/error-ed7f5b38.svg",l={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function f(o){return fetch(`${l.url}?key=${l.key}&orientation=${l.orientationPhoto}&image_type=${l.typeImage}&per_page=${l.quantität}&safesearch=${l.safesearch}&q=${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}const y=new m(".gallery a",{captionsData:"alt",captionDelay:250}),h=document.querySelector(".gallery");function g(o){h.innerHTML="";const r=o.map(({largeImageURL:s,webformatURL:i,tags:e,likes:t,views:a,comments:p,downloads:d})=>`<li class="gallery-item">
        <a href="${s}">
          <img src="${i}" alt="${e}" width="320" height=200" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${t}</p>
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
            <p class="count">${d}</p>
          </li>
        </ul>
      </li>
      `).join("");h.insertAdjacentHTML("afterbegin",r),y.refresh()}let w=document.querySelector("#name-input");const C=document.querySelector(".form"),L=document.querySelector(".gallery"),n=document.querySelector(".loader");C.addEventListener("submit",b);function b(o){o.preventDefault(),n.classList.remove("visually-hidden");const s=o.currentTarget.elements.query.value.toLowerCase();if(s==="")c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u});else{console.log(s),w.value="";let i=s.toLowerCase();n.classList.add("visually-hidden"),f(i).then(e=>{let t=e.hits;console.log(t),$(t),g(t),n.classList.add("visually-hidden")}).catch(S)}}function S(o){console.log(o),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u})}function v(){L.innerHTML=""}function $(o){if(v(),o.length===0)return n.classList.add("visually-hidden"),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u});o.length<40&&c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:u,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"}),g(o)}
//# sourceMappingURL=commonHelpers.js.map
