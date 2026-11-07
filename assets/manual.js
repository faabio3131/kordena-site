(function(){'use strict';
var input=document.getElementById('manual-search'),count=document.getElementById('manual-count'),empty=document.getElementById('manual-empty');
if(!input)return;
var items=Array.from(document.querySelectorAll('.manual-chapter')),links=Array.from(document.querySelectorAll('.manual-toc-item'));
var normalize=function(s){return (s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase()};
input.addEventListener('input',function(){
var q=normalize(input.value.trim()),shown=0;
items.forEach(function(el){var ok=!q||normalize(el.getAttribute('data-search')).includes(q);el.hidden=!ok;if(ok)shown++});
links.forEach(function(a){var id=a.getAttribute('href').slice(1);var sec=document.getElementById(id);a.hidden=!!(sec&&sec.hidden)});
count.textContent=shown+' de '+items.length+' capítulos';empty.hidden=shown!==0;
});
})();