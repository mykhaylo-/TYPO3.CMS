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
"use strict";var TYPO3;!function(e){e.AdminPanelSelectors={adminPanelRole:"form[data-typo3-role=typo3-adminPanel]",moduleTriggerRole:"[data-typo3-role=typo3-adminPanel-module-trigger]",moduleParentClass:".typo3-adminPanel-module",contentTabRole:"[data-typo3-role=typo3-adminPanel-content-tab]",saveButtonRole:"[data-typo3-role=typo3-adminPanel-saveButton]",triggerRole:"[data-typo3-role=typo3-adminPanel-trigger]",popupTriggerRole:"[data-typo3-role=typo3-adminPanel-popup-trigger]",panelTriggerRole:"[data-typo3-role=typo3-adminPanel-panel-trigger]",panelParentClass:".typo3-adminPanel-panel",contentSettingsTriggerRole:"[data-typo3-role=typo3-adminPanel-content-settings]",contentSettingsParentClass:".typo3-adminPanel-content-settings",contentParentClass:".typo3-adminPanel-content",zoomTarget:"[data-typo3-zoom-target]",zoomClose:"[data-typo3-zoom-close]",currentContentRole:"[data-typo3-role=typo3-adminPanel-content]",contentPaneRole:"[data-typo3-role=typo3-adminPanel-content-pane]"},e.AdminPanelClasses={active:"active",activeModule:"typo3-adminPanel-module-active",activeContentSetting:"typo3-adminPanel-content-settings-active",backdrop:"typo3-adminPanel-backdrop",activeTab:"typo3-adminPanel-content-header-item-active",activePane:"typo3-adminPanel-content-panes-item-active",noScroll:"typo3-adminPanel-noscroll",zoomShow:"typo3-adminPanel-zoom-show"};var t=function(){function t(){var t=this;this.adminPanel=document.querySelector(e.AdminPanelSelectors.adminPanelRole),this.modules=this.querySelectorAll(e.AdminPanelSelectors.moduleTriggerRole).map(function(n){var o=n.closest(e.AdminPanelSelectors.moduleParentClass);return new a(t,o,n)}),this.popups=this.querySelectorAll(e.AdminPanelSelectors.popupTriggerRole).map(function(e){return new n(t,e)}),this.panels=this.querySelectorAll(e.AdminPanelSelectors.panelTriggerRole).map(function(t){var n=t.closest(e.AdminPanelSelectors.panelParentClass);return new o(n,t)}),this.contentSettings=this.querySelectorAll(e.AdminPanelSelectors.contentSettingsTriggerRole).map(function(t){var n=t.closest(e.AdminPanelSelectors.contentParentClass).querySelector(e.AdminPanelSelectors.contentSettingsParentClass);return new i(n,t)}),this.trigger=document.querySelector(e.AdminPanelSelectors.triggerRole),this.initializeEvents(),this.addBackdropListener()}return t.prototype.disableModules=function(){this.modules.forEach(function(e){return e.disable()})},t.prototype.disablePopups=function(){this.popups.forEach(function(e){return e.disable()})},t.prototype.renderBackdrop=function(){var t=document.querySelector("#TSFE_ADMIN_PANEL_FORM"),n=document.createElement("div");document.querySelector("body").classList.add(e.AdminPanelClasses.noScroll),n.classList.add(e.AdminPanelClasses.backdrop),t.appendChild(n),this.addBackdropListener()},t.prototype.removeBackdrop=function(){var t=document.querySelector("."+e.AdminPanelClasses.backdrop);document.querySelector("body").classList.remove(e.AdminPanelClasses.noScroll),null!==t&&t.remove()},t.prototype.querySelectorAll=function(e,t){return void 0===t&&(t=null),null===t?Array.from(document.querySelectorAll(e)):Array.from(t.querySelectorAll(e))},t.prototype.initializeEvents=function(){var t=this;this.querySelectorAll(e.AdminPanelSelectors.contentTabRole).forEach(function(e){return e.addEventListener("click",t.switchTab.bind(t))}),this.querySelectorAll(e.AdminPanelSelectors.zoomTarget).forEach(function(e){return e.addEventListener("click",t.openZoom.bind(t))}),this.querySelectorAll(e.AdminPanelSelectors.zoomClose).forEach(function(e){return e.addEventListener("click",t.closeZoom.bind(t))}),this.querySelectorAll(e.AdminPanelSelectors.triggerRole).forEach(function(e){return e.addEventListener("click",t.toggleAdminPanelState.bind(t))}),this.querySelectorAll(e.AdminPanelSelectors.saveButtonRole).forEach(function(e){return e.addEventListener("click",t.sendAdminPanelForm.bind(t))}),this.querySelectorAll("[data-typo3-role=typo3-adminPanel-content-close]").forEach(function(e){e.addEventListener("click",function(){t.disableModules(),t.removeBackdrop()})}),this.querySelectorAll(".typo3-adminPanel-table th, .typo3-adminPanel-table td").forEach(function(e){e.addEventListener("click",function(){e.focus();try{document.execCommand("copy")}catch(e){}})})},t.prototype.switchTab=function(t){t.preventDefault();var n=e.AdminPanelClasses.activeTab,o=e.AdminPanelClasses.activePane,i=t.currentTarget,a=i.closest(e.AdminPanelSelectors.currentContentRole),l=this.querySelectorAll(e.AdminPanelSelectors.contentTabRole,a),s=this.querySelectorAll(e.AdminPanelSelectors.contentPaneRole,a);l.forEach(function(e){return e.classList.remove(n)}),i.classList.add(n),s.forEach(function(e){return e.classList.remove(o)}),document.querySelector("[data-typo3-tab-id="+i.dataset.typo3TabTarget+"]").classList.add(o)},t.prototype.openZoom=function(t){t.preventDefault();var n=t.currentTarget.getAttribute("data-typo3-zoom-target");document.querySelector("[data-typo3-zoom-id="+n+"]").classList.add(e.AdminPanelClasses.zoomShow)},t.prototype.closeZoom=function(t){t.preventDefault(),t.currentTarget.closest("[data-typo3-zoom-id]").classList.remove(e.AdminPanelClasses.zoomShow)},t.prototype.sendAdminPanelForm=function(e){e.preventDefault();var t=new FormData(this.adminPanel),n=new XMLHttpRequest;n.open("POST",this.adminPanel.dataset.typo3AjaxUrl),n.send(t),n.onload=function(){return location.reload()}},t.prototype.toggleAdminPanelState=function(){var e=new XMLHttpRequest;e.open("GET",this.trigger.dataset.typo3AjaxUrl),e.send(),e.onload=function(){return location.reload()}},t.prototype.addBackdropListener=function(){var t=this;this.querySelectorAll("."+e.AdminPanelClasses.backdrop).forEach(function(n){n.addEventListener("click",function(){t.removeBackdrop(),t.querySelectorAll(e.AdminPanelSelectors.moduleTriggerRole).forEach(function(t){t.closest(e.AdminPanelSelectors.moduleParentClass).classList.remove(e.AdminPanelClasses.activeModule)})})})},t}();e.AdminPanel=t;var n=function(){function t(e,t){this.adminPanel=e,this.element=t,this.initializeEvents()}return t.prototype.isActive=function(){return this.element.classList.contains(e.AdminPanelClasses.active)},t.prototype.enable=function(){this.element.classList.add(e.AdminPanelClasses.active)},t.prototype.disable=function(){this.element.classList.remove(e.AdminPanelClasses.active)},t.prototype.initializeEvents=function(){var e=this;this.element.addEventListener("click",function(){e.isActive()?e.disable():(e.adminPanel.disablePopups(),e.enable())})},t}(),o=function(){function t(e,t){this.element=e,this.trigger=t,this.initializeEvents()}return t.prototype.isActive=function(){return this.element.classList.contains(e.AdminPanelClasses.active)},t.prototype.enable=function(){this.element.classList.add(e.AdminPanelClasses.active)},t.prototype.disable=function(){this.element.classList.remove(e.AdminPanelClasses.active)},t.prototype.initializeEvents=function(){var e=this;this.trigger.addEventListener("click",function(){e.isActive()?e.disable():e.enable()})},t}(),i=function(){function t(e,t){this.element=e,this.trigger=t,this.initializeEvents()}return t.prototype.isActive=function(){return this.element.classList.contains(e.AdminPanelClasses.activeContentSetting)},t.prototype.enable=function(){this.element.classList.add(e.AdminPanelClasses.activeContentSetting)},t.prototype.disable=function(){this.element.classList.remove(e.AdminPanelClasses.activeContentSetting)},t.prototype.initializeEvents=function(){var e=this;this.trigger.addEventListener("click",function(){e.isActive()?e.disable():e.enable()})},t}(),a=function(){function t(e,t,n){this.adminPanel=e,this.element=t,this.trigger=n,this.initializeEvents()}return t.prototype.isActive=function(){return this.element.classList.contains(e.AdminPanelClasses.activeModule)},t.prototype.enable=function(){this.element.classList.add(e.AdminPanelClasses.activeModule)},t.prototype.disable=function(){this.element.classList.remove(e.AdminPanelClasses.activeModule)},t.prototype.initializeEvents=function(){var e=this;this.trigger.addEventListener("click",function(t){e.adminPanel.removeBackdrop(),e.isActive()?e.disable():(e.adminPanel.disableModules(),e.adminPanel.renderBackdrop(),e.enable())})},t}()}(TYPO3||(TYPO3={})),window.addEventListener("load",function(){return new TYPO3.AdminPanel},!1);