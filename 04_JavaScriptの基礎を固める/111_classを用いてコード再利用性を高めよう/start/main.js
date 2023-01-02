document.addEventListener('DOMContentLoaded', function () {
    const str1 = new TextAnimation('.animate-title');
    const str2 = new TextAnimation('.animate-title-2');
    setTimeout(()=> {
        str1.animate();
        str2.animate();
    },2000)

});

class TextAnimation{
    constructor(el){
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._spritText();
    }
    _spritText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate(){
        this.el.classList.toggle('inview');
    }
}
