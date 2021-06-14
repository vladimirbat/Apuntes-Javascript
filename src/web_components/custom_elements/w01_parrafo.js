// ############ Custom Element que hereda de Parrafo ##################3
class ParrafoUtil extends HTMLParagraphElement{
    constructor(){
        super();
        this.insertado = false;
    }
    connectedCallback(){
        if(!this.insertado) {
            this.insertado = true;
            const elementos = this.textContent.split(' ');
            const spans = elementos.map((elemento)=> {
                const span = document.createElement('span');
                span.textContent = elemento;
                return span;
            })
            this.innerHTML = '';
            spans.forEach(span => {
                span.addEventListener('click',this.quitarSpan);
                this.appendChild(span);
                this.appendChild(document.createElement('br'));
            });
            const link = document.createElement('link');
            link.setAttribute('rel', 'stylesheet');
            link.setAttribute('type', 'text/css');
            link.setAttribute('href', './w01_estilos.css');
            this.appendChild(link);
        }
    }
    quitarSpan(event){
        const span = event.currentTarget;
        span.parentNode.removeChild(span.nextSibling);
        span.parentNode.removeChild(span);
    }
}

customElements.define('parrafo-util',ParrafoUtil, { extends: 'p' });