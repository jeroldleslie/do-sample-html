!function(){function e(e){document.title=e.title,document.body.innerHTML=e.body,document.body.classList.add("page-404")}var t,o,n,l=document.querySelector(".btn"),s=document.querySelector(".darkroom"),i=document.querySelector(".giftroom"),a=document.querySelector(".hallway"),c=document.querySelector(".empty-room"),r=document.querySelector(".flash"),d=document.querySelectorAll(".bb-text"),u=document.querySelectorAll(".gift-text"),y=document.querySelectorAll(".hall-text"),m=document.querySelectorAll(".room-text"),p=document.querySelector(".btn-ref"),f=document.querySelectorAll(".frame"),b=document.querySelector(".scroll"),L=document.querySelector(".text"),h=document.querySelector(".switch-aud"),S=document.querySelector(".blast-aud"),T=document.querySelector(".door-aud"),q=document.querySelector(".haunt-aud"),g=document.querySelector(".hbd-aud"),v=function(e){for(var t=function(t){setTimeout((function(){e[t].classList.add("read"),t===e.length-1&&(l.style.display="inline-block",p.style.display="block")}),5e3*t)},o=0;o<e.length;o++)t(o)},k=function(e){e.classList.add("fade-in"),e.style.opacity="0",l.style.display="none",p.style.display="none"},w=(t=new Date("2022-10-25T00:00").getTime(),o=t+864e5,(n=Date.now())<t?"IS_EARLY":n>o?"IS_LATE":"ON_TIME");"IS_EARLY"===w&&e({title:"Come Back Later...",body:'<br />\n<div class="elfsight-app-c63656a1-1aec-4d6b-9008-32fd2c2144f8"></div>\n    <h1>Hi Viji, you come early</h1>\n    <br /><br /><br />\n    <p>\n        I know this page is very interesting for you, especially for your special day but.<br />\n        You need to be patience until the time has come, right ?\n    </p>\n    '}),"IS_LATE"===w&&e({title:"See you next time...",body:"<br />\n    <h1>The party was over</h1>\n    <br /><br /><br />\n    <p>\n        Yes, my gift for you is kinda simple, cheap, and weird ? &#128534<br>\n        B-but. It's only for you. &#128150\n    </p>\n"}),"ON_TIME"===w&&(p.innerHTML="Click the Light Bulb.",v(d),l.addEventListener("click",(function(){if(l.classList.contains("switch"))h.play(),k(s),p.innerHTML="Click the Door",setTimeout((function(){l.classList.add("door-out"),l.classList.remove("switch"),s.style.display="none",v(m)}),4e3);else if(l.classList.contains("door-out"))T.play(),k(c),setTimeout((function(){q.play(),l.classList.add("door-in"),l.classList.remove("door-out"),c.style.display="none",v(y)}),4e3);else if(l.classList.contains("door-in"))T.play(),k(a),p.innerHTML="Click the Gift",setTimeout((function(){l.classList.add("gift"),l.classList.remove("door-in"),a.style.display="none",v(u)}),4e3);else if(l.classList.contains("gift")){q.pause(),S.play(),i.style.display="none",k(r),g.loop=!0,g.play();var e=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--readTime"))+5;f[1].style.display="flex",setTimeout((function(){f[1].classList.add("appear"),f[1].style.opacity="1",L.classList.add("move-up")}),1500),setTimeout((function(){L.style.transform="translateY(-100%)",r.style.display="none"}),5e3),setTimeout((function(){b.classList.add("fade-in"),b.style.opacity="0"}),1e3*e),setTimeout((function(){f[1].style.display="none",f[0].style.display="flex",f[0].classList.add("appear"),f[0].style.opacity="1"}),1e3*(e+3))}})))}();
//# sourceMappingURL=index.1a77cd8e.js.map
