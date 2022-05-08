const template = document.createElement('template')
template.innerHTML = `
<style>
    :host {
        display: block;
        width: 500px;
        height: 25px;
        background: #ccc;
        overflow: hidden;
        margin: 10px auto;
    }
    .fill {
        width: 50%;
        height: 100%;
        background: #c33;
        transition: width 300ms;
    }
</style>
<div class="fill"></div>
`
const content = template.content.cloneNode(true)

class ProgressBar extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
        this.shadowRoot.append(content)
    }
    set progress(newValue) {
        this.shadowRoot.querySelector('.fill').style.width = newValue + '%'
    }
}
customElements.define("progress-bar", ProgressBar)