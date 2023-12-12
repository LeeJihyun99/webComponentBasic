class Tooltip extends HTMLElement{
    constructor(){
        super();
        this._tooltipBox;
        this._tooltipText = 'This is a dummy text.';
        this.attachShadow({mode:'open'});

    }
    connectedCallback(){
        const tooltipIcon = document.createElement('span');
        if(this.hasAttribute('text')){
            this._tooltipText = this.getAttribute('text');
        }
        tooltipIcon.textContent = 'XD';
        tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
        tooltipIcon.addEventListener('mouseout',this._hideTooltip.bind(this));
        this.shadowRoot.appendChild(tooltipIcon);
        this.style.position = 'relative';
    }
    _showTooltip(){
        this._tooltipBox= document.createElement('div');
        this._tooltipBox.textContent =this._tooltipText;
        this._tooltipBox.style.backgroundColor='black';
        this._tooltipBox.style.color='white';
        this._tooltipBox.style.position='absolute';
        this.shadowRoot.appendChild(this._tooltipBox);
    }
    _hideTooltip(){
        this.shadowRoot.removeChild(this._tooltipBox);
    }
}

customElements.define('lee-tooltip',Tooltip);