class Tooltip extends HTMLElement{
    constructor(){
        super();
        this._tooltipBox;
        this._tooltipText = 'This is a dummy text.';
        this.attachShadow({mode:'open'});
        this.shadowRoot.innerHTML=
        `
        <style>
            div{
                background-color: black;
                color:white;
                position:absolute;
                z-index:10;
            }
        </style>
        <slot>
            This will be shown only when there is nothing in between the opening and closing custom tags.
        </slot>
        <span>XD</span>`;

    }
    connectedCallback(){
        if(this.hasAttribute('text')){
            this._tooltipText = this.getAttribute('text');
        }
        const tooltipIcon = this.shadowRoot.querySelector('span');
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseout',this._hideTooltip.bind(this));
        this.style.position = 'relative';
    }
    _showTooltip(){
        this._tooltipBox= document.createElement('div');
        this._tooltipBox.textContent =this._tooltipText;
        this.shadowRoot.appendChild(this._tooltipBox);
    }
    _hideTooltip(){
        this.shadowRoot.removeChild(this._tooltipBox);
    }
}

customElements.define('lee-tooltip',Tooltip);