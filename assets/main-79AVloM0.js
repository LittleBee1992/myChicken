/* empty css              */(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=document.getElementById("nav-toggle"),m=document.getElementById("nav-menu"),u=document.querySelectorAll(".nav__link"),h=()=>{m.classList.toggle("show-menu")};g.addEventListener("click",h);const f=()=>{m.classList.remove("show-menu")};u.forEach(t=>t.addEventListener("click",f));const v=document.querySelectorAll("section"),p=new IntersectionObserver(t=>{t.forEach(s=>{if(s.isIntersecting){const r=s.target.id,c=document.querySelector(`[href*=${r}]`);u.forEach(e=>{e.classList.remove("active-link")}),c.classList.add("active-link")}})},{threshold:.6});v.forEach(t=>{p.observe(t)});const L=()=>{const t=document.getElementById("header");window.scrollY>=200?t.classList.add("scroll-header"):t.classList.remove("scroll-header")};window.addEventListener("scroll",L);const _=()=>{const t=document.getElementById("scroll-top");window.scrollY>=560?t.classList.add("show-scroll"):t.classList.remove("show-scroll")};window.addEventListener("scroll",_);const n=document.getElementById("theme-button"),i="dark-theme",a="bx-sun",d=localStorage.getItem("selected-theme"),y=localStorage.getItem("selected-icon"),b=()=>document.body.matches(`.${i}`)?"dark":"light",w=()=>n.matches(`.${a}`)?"bx-moon":"bx-sun";d&&(document.body.classList[d==="dark"?"add":"remove"](i),n.classList[y==="bx-moon"?"add":"remove"](a));n.addEventListener("click",()=>{document.body.classList.toggle(i),n.classList.toggle(a),localStorage.setItem("selected-theme",b()),localStorage.setItem("selected-icon",w())});const E=ScrollReveal({origin:"top",distance:"30px",duration:2e3,reset:!0});E.reveal(`.home__data, .home__img, .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app_img,
            .contact__data, .contact__button,
            .footer__content`,{interval:200});
