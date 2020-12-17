/*
 * This file is part of the TYPO3 CMS project.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */
var __decorate=this&&this.__decorate||function(t,e,i,s){var a,o=arguments.length,n=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,i,s);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(n=(o<3?a(n):o>3?a(e,i,n):a(e,i))||n);return o>3&&n&&Object.defineProperty(e,i,n),n};define(["require","exports","lit-element","lit-html/directives/class-map","lit-html/directives/if-defined","./Enum/Severity","./Severity"],(function(t,e,i,s,a,o,n){"use strict";class r{static notice(t,e,i,s){r.showMessage(t,e,o.SeverityEnum.notice,i,s)}static info(t,e,i,s){r.showMessage(t,e,o.SeverityEnum.info,i,s)}static success(t,e,i,s){r.showMessage(t,e,o.SeverityEnum.ok,i,s)}static warning(t,e,i,s){r.showMessage(t,e,o.SeverityEnum.warning,i,s)}static error(t,e,i=0,s){r.showMessage(t,e,o.SeverityEnum.error,i,s)}static showMessage(t,e,i=o.SeverityEnum.info,s=this.duration,a=[]){s=void 0===s?this.duration:s,null!==this.messageContainer&&null!==document.getElementById("alert-container")||(this.messageContainer=document.createElement("div"),this.messageContainer.setAttribute("id","alert-container"),document.body.appendChild(this.messageContainer));const n=document.createElement("typo3-notification-message");n.setAttribute("notificationId","notification-"+Math.random().toString(36).substr(2,5)),n.setAttribute("title",t),e&&n.setAttribute("message",e),n.setAttribute("severity",i.toString()),n.setAttribute("duration",s.toString()),n.actions=a,this.messageContainer.appendChild(n)}}r.duration=5,r.messageContainer=null;let c,l=class extends i.LitElement{constructor(){super(...arguments),this.severity=o.SeverityEnum.info,this.duration=0,this.actions=[],this.visible=!1,this.executingAction=-1}createRenderRoot(){return this}async firstUpdated(){await new Promise(t=>window.setTimeout(t,200)),this.visible=!0,await this.requestUpdate(),this.duration>0&&(await new Promise(t=>window.setTimeout(t,1e3*this.duration)),this.close())}async close(){this.visible=!1;const t=()=>{this.parentNode&&this.parentNode.removeChild(this)};"animate"in this?(this.style.overflow="hidden",this.style.display="block",this.animate([{height:this.getBoundingClientRect().height+"px"},{height:0}],{duration:400,easing:"cubic-bezier(.02, .01, .47, 1)"}).onfinish=t):t()}render(){const t=n.getCssClass(this.severity);let e="";switch(this.severity){case o.SeverityEnum.notice:e="lightbulb-o";break;case o.SeverityEnum.ok:e="check";break;case o.SeverityEnum.warning:e="exclamation";break;case o.SeverityEnum.error:e="times";break;case o.SeverityEnum.info:default:e="info"}return i.html`
      <div
        id="${a.ifDefined(this.notificationId||void 0)}"
        class="${"alert alert-"+t+" alert-dismissible fade"+(this.visible?" in":"")}"
        role="alert">
        <button type="button" class="close" @click="${async t=>this.close()}">
          <span aria-hidden="true"><i class="fa fa-times-circle"></i></span>
          <span class="sr-only">Close</span>
        </button>
        <div class="media">
          <div class="media-left">
            <span class="fa-stack fa-lg">
              <i class="fa fa-circle fa-stack-2x"></i>
              <i class="${"fa fa-"+e+" fa-stack-1x"}"></i>
            </span>
          </div>
          <div class="media-body">
            <h4 class="alert-title">${this.title}</h4>
            <p class="alert-message text-pre-wrap">${this.message?this.message:""}</p>
          </div>
        </div>
        ${0===this.actions.length?"":i.html`
          <div class="alert-actions">
            ${this.actions.map((t,e)=>i.html`
              <a href="#"
                 title="${t.label}"
                 @click="${async i=>{i.preventDefault(),this.executingAction=e,await this.updateComplete,await t.action.execute(i.currentTarget),this.close()}}"
                 class="${s.classMap({executing:this.executingAction===e,disabled:this.executingAction>=0&&this.executingAction!==e})}"
                >${t.label}</a>
            `)}
          </div>
        `}
      </div>
    `}};__decorate([i.property()],l.prototype,"notificationId",void 0),__decorate([i.property()],l.prototype,"title",void 0),__decorate([i.property()],l.prototype,"message",void 0),__decorate([i.property({type:Number})],l.prototype,"severity",void 0),__decorate([i.property()],l.prototype,"duration",void 0),__decorate([i.property({type:Array,attribute:!1})],l.prototype,"actions",void 0),__decorate([i.internalProperty()],l.prototype,"visible",void 0),__decorate([i.internalProperty()],l.prototype,"executingAction",void 0),l=__decorate([i.customElement("typo3-notification-message")],l);try{parent&&parent.window.TYPO3&&parent.window.TYPO3.Notification&&(c=parent.window.TYPO3.Notification),top&&top.TYPO3.Notification&&(c=top.TYPO3.Notification)}catch(t){}return c||(c=r,"undefined"!=typeof TYPO3&&(TYPO3.Notification=c)),c}));