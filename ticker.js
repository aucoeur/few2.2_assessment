const template = document.createElement('template');
template.innerHTML = 
`<style>
    div { 
        animation: ticker 20s linear infinite;
    }
        @-webkit-keyframes ticker {
            0% { -webkit-transform: translateX(0); }
            98% { opacity: 1;  }
            99% { opacity: 0; left: 0; -webkit-transform: translateX(-100%); }
            100% { opacity: 0; -webkit-transform: translateX(0); }
        }
        @keyframes ticker {
            0% { transform: translateX(0); }
            98% { opacity: 1;  }
            99% { opacity: 0; left: 0; transform: translateX(-100%); }
            100% { opacity: 0; transform: translateX(0); }
        }
</style>
<div><slot name="text"><h1>...Color.com is awesome...</h1></slot></div>
`

class TickerTape extends HTMLElement {
    constructor() {
        super();
        const tempNode = template.content.cloneNode(true)
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(tempNode)
        
    }
}

customElements.define('ticker-tape', TickerTape);