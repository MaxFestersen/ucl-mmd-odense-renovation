var studieopgave_oplysning=document.getElementById("studieopgave_oplysning"),studieopgave_oplysning_closebth=document.getElementById("studieopgave_oplysning_closebth");function getCookie(){for(var e="studieopgave_oplysning=",o=decodeURIComponent(document.cookie).split(";"),n=0;n<o.length;n++){for(var i=o[n];" "==i.charAt(0);)i=i.substring(1);if(0==i.indexOf(e))return studieopgave_oplysning.style.display="none",console.log("#studieopgave_oplysning has been hidden."),i.substring(e.length,i.length)}return""}function hideAndSave(){var e=new Date;e.setTime(e.getTime()+62208e6);var o="expires="+e.toUTCString();document.cookie="studieopgave_oplysning=1;"+o+";path=/",studieopgave_oplysning.classList.add("hidden"),console.log("cookie is saved.")}getCookie(),studieopgave_oplysning_closebth.onclick=hideAndSave;