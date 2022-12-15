(()=>{"use strict";var e={11:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HelloWorldPanel=void 0;const n=i(496),o=i(686);class s{constructor(e,t){this._disposables=[],this._panel=e,this._extensionUri=t,this._update(),this._panel.onDidDispose((()=>this.dispose()),null,this._disposables)}static createOrShow(e){const t=n.window.activeTextEditor?n.window.activeTextEditor.viewColumn:void 0;if(s.currentPanel)return s.currentPanel._panel.reveal(t),void s.currentPanel._update();const i=n.window.createWebviewPanel(s.viewType,"HelloWorld",t||n.ViewColumn.One,{enableScripts:!0,localResourceRoots:[n.Uri.joinPath(e,"media"),n.Uri.joinPath(e,"out/compiled")]});s.currentPanel=new s(i,e)}static kill(){s.currentPanel?.dispose(),s.currentPanel=void 0}static revive(e,t){s.currentPanel=new s(e,t)}dispose(){for(s.currentPanel=void 0,this._panel.dispose();this._disposables.length;){const e=this._disposables.pop();e&&e.dispose()}}async _update(){const e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e),e.onDidReceiveMessage((async e=>{switch(e.type){case"onInfo":if(!e.value)return;n.window.showInformationMessage(e.value);break;case"onError":if(!e.value)return;n.window.showErrorMessage(e.value)}}))}_getHtmlForWebview(e){const t=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"out/compiled","HelloWorld.js")),i=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"media","reset.css")),s=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"media","vscode.css")),r=(0,o.getNonce)();return`<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\x3c!--\n\t\t\t\t\tUse a content security policy to only allow loading images from https or from our extension directory,\n\t\t\t\t\tand only allow scripts that have a specific nonce.\n        --\x3e\n        <meta http-equiv="Content-Security-Policy" content="img-src https: data:; style-src 'unsafe-inline' ${e.cspSource};">\n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\t\t\t\t<link href="${i}" rel="stylesheet">\n        <link href="${s}" rel="stylesheet">        \n        \n        <\/script>\n\t\t\t</head>\n      <body>\n\n      </body>\n      <script src="${t}" nonce="${r}"><\/script>\n\t\t\t</html>`}}t.HelloWorldPanel=s,s.viewType="hello-world"},441:(e,t,i)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SidebarProvider=void 0;const n=i(496),o=i(686);t.SidebarProvider=class{constructor(e){this._extensionUri=e}resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage((async e=>{switch(e.type){case"onInfo":if(!e.value)return;n.window.showInformationMessage(e.value);break;case"onError":if(!e.value)return;n.window.showErrorMessage(e.value)}}))}revive(e){this._view=e}_getHtmlForWebview(e){const t=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"media","reset.css")),i=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"media","vscode.css")),s=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"out","compiled/sidebar.js")),r=e.asWebviewUri(n.Uri.joinPath(this._extensionUri,"out","compiled/sidebar.css")),a=(0,o.getNonce)();return`<!DOCTYPE html>\n\t\t\t<html lang="en">\n\t\t\t<head>\n\t\t\t\t<meta charset="UTF-8">\n\t\t\t\t\x3c!--\n\t\t\t\t\tUse a content security policy to only allow loading images from https or from our extension directory,\n\t\t\t\t\tand only allow scripts that have a specific nonce.\n        --\x3e\n        \n\t\t\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <script type="text/javascript"\n\t\tsrc=https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js?config=TeX-AMS-MML_HTMLorMML&delayStartupUntil=configured>\n\t\t<\/script>\n\t\t\t\t<link href="${t}" rel="stylesheet">\n\t\t\t\t<link href="${i}" rel="stylesheet">\n        <link href="${r}" rel="stylesheet">\n        <script nonce="${a}">\n          const tsvscode = acquireVsCodeApi();\n        <\/script>\n\t\t\t</head>\n      <body>\n\t\t\t\t<script nonce="${a}" src="${s}"><\/script>\n\t\t\t</body>\n\t\t\t</html>`}}},686:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getNonce=void 0,t.getNonce=function(){let e="";const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let i=0;i<32;i++)e+=t.charAt(Math.floor(Math.random()*t.length));return e}},496:e=>{e.exports=require("vscode")}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}var n={};(()=>{var e=n;Object.defineProperty(e,"__esModule",{value:!0}),e.deactivate=e.activate=void 0;const t=i(496),o=i(11),s=i(441);e.activate=function(e){const i=new s.SidebarProvider(e.extensionUri);e.subscriptions.push(t.window.registerWebviewViewProvider("LiveQD-sidebar",i)),e.subscriptions.push(t.commands.registerCommand("LQD.RefreshWebviews",(()=>{o.HelloWorldPanel.kill(),o.HelloWorldPanel.createOrShow(e.extensionUri),setTimeout((()=>{t.commands.executeCommand("workbench.action.webview.openDeveloperTools")}),500)}))),e.subscriptions.push(t.commands.registerCommand("LQD.helloWorld",(()=>{o.HelloWorldPanel.createOrShow(e.extensionUri)})))},e.deactivate=function(){}})(),module.exports=n})();