import{S as m,i as c}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const u="/goit-js-hw-11/assets/error-ed7f5b38.svg",a={url:"https://pixabay.com/api/",key:"44801301-54ead35aff71c3b10e6d6b08d",orientationPhoto:"horizontal",typeImage:"photo",quantität:"40",safesearch:"true"};function f(o){return fetch(`${a.url}?key=${a.key}&orientation=${a.orientationPhoto}&image_type=${a.typeImage}&per_page=${a.quantität}&safesearch=${a.safesearch}&q=${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()})}function g(o){const r=document.querySelector(".gallery");r.innerHTML="";const s=images.map(({largeImageURL:i,previewURL:e,likes:t,views:l,comments:p,downloads:h})=>`<li class="gallery-item">
        <a href="${i}">
          <img src="${webformatURL}" alt="" class="card-img"/>
        </a>
        <ul class="galery-item-description">
          <li>
            <p class="count-text">Likes</p>
            <p class="count">${t}</p>
          </li>
          <li>
            <p class="count-text">Views</p>
            <p class="count">${l}</p>
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
      `).join("");r.insertAdjacentHTML("afterbegin",s),new m(".gallery a",{captionsData:"alt",captionDelay:250})}let d=document.querySelector("#name-input");const y=document.querySelector(".form"),n=document.querySelector(".loader");y.addEventListener("submit",w);function w(o){o.preventDefault(),n.classList.remove("visually-hidden");const s=o.currentTarget.elements.query.value.toLowerCase();if(s==="")c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",icon:"icon-error.svg",iconUrl:u});else{console.log(s),d.value="";let i=s.toLowerCase();n.classList.add("visually-hidden"),f(i).then(e=>{let t=e.hits;console.log(t),b(t),g(),n.classList.add("visually-hidden")}).catch(C)}}function C(o){c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u})}function L(){galleryList.innerHTML=""}function b(o){if(L(),o.length===0)return n.classList.add("visually-hidden"),c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, there are no images matching your search query. Please try again!",iconUrl:u});o.length<40&&c.show({backgroundColor:"#ef4040",close:!1,closeOnClick:!0,progressBarColor:"white",title:"Error",titleColor:"white",iconUrl:u,position:"topRight",icon:"icon-error.svg",messageColor:"white",messageSize:"16px",message:"Sorry, das ist alles, was wir haben!"}),g()}
//# sourceMappingURL=commonHelpers.js.map
