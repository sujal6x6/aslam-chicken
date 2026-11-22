(function(){
var pl=document.querySelector('.plate'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches,hd=document.getElementById('hd'),bg=document.getElementById('bg'),lk=document.getElementById('lk');
function sc(){hd.classList.toggle('solid',scrollY>40);if(pl&&!rm)pl.style.translate='0 '+Math.min(scrollY*.12,80)+'px'}
addEventListener('scroll',sc,{passive:true});sc();
function tog(o){bg.setAttribute('aria-expanded',o);lk.classList.toggle('open',o);document.body.style.overflow=o?'hidden':''}
bg.addEventListener('click',function(){tog(bg.getAttribute('aria-expanded')!=='true')});
lk.addEventListener('click',function(e){if(e.target.closest('a'))tog(false)});
addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});
document.getElementById('yr').textContent=new Date().getFullYear();
var ld=document.getElementById('ldr'),t0=performance.now();
function hideLd(){ld.classList.add('done');document.documentElement.classList.remove('ld');setTimeout(function(){ld.remove()},1000)}
function finLd(){setTimeout(hideLd,Math.max(0,1700-(performance.now()-t0)))}
document.readyState==='complete'?finLd():addEventListener('load',finLd);
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
els.forEach(function(el,i){el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
}else els.forEach(function(el){el.classList.add('in')});
var gallery=document.querySelector('.grid'),viewer=document.getElementById('gallery-lightbox');
if(gallery&&viewer&&typeof viewer.showModal==='function'){
var viewerImg=document.getElementById('lightbox-image'),viewerCaption=document.getElementById('lightbox-caption');
gallery.addEventListener('click',function(e){
var item=e.target.closest('.gallery-item');
if(!item)return;
var thumb=item.querySelector('img');
viewerImg.src=item.getAttribute('data-full');
viewerImg.alt=thumb?thumb.alt:'';
viewerCaption.textContent=item.getAttribute('data-caption')||'';
viewer.showModal();
});
viewer.querySelector('.lightbox-close').addEventListener('click',function(){viewer.close()});
viewer.addEventListener('click',function(e){if(e.target===viewer)viewer.close()});
viewer.addEventListener('close',function(){viewerImg.removeAttribute('src')});
}
})();
