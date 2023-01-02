document.addEventListener("DOMContentLoaded",function(){

    const el = document.querySelector('.animate-title');
    const str= el.innerHTML.trim().split("");
    el.innerHTML = str.reduce((accr,curr) => {
        accr = accr.replace(/\s+/,"&nbsp");
        return `${accr}<span>${curr}</span>`;
    },"")

    // const el =  document.querySelector(".animate-title");
    // const str = el.innerHTML.trim();
    // let strAll = "";

    // for(let i of str){
    // i = i.replace(/\s+/,"&nbsp");
    //     strAll += `<span>${i}</span>`;
    // }
    // el.innerHTML = strAll;

})