import {IDom} from './dom';
import {IGlobal} from './global';

/**
* Represents the core APIs of the DOM.
*/
export class NodeJsDom implements IDom {

  constructor(public global: IGlobal) {

    this.Element = (<any>global).Element;
    this.SVGElement = (<any>global).SVGElement;
  }

  Element: Element;
  SVGElement: SVGElement;
  boundary: string = 'aurelia-dom-boundary';
  title: string = "";
  activeElement: Element;
  addEventListener(eventName: string, callback: EventListener, capture: boolean): void {
    return this.global.document.addEventListener(eventName, callback, capture);
  }
  removeEventListener(eventName: string, callback: EventListener, capture: boolean): void {
    return this.global.document.removeEventListener(eventName, callback, capture);
  }
  adoptNode(node: Node): Node {
    return this.global.document.adoptNode(node);
  }
  createElement(tagName: string): Element {
    return this.global.document.createElement(tagName);
  }
  createTextNode(text: string): Text {
    return this.global.document.createTextNode(text);
  }
  createComment(text: string): Comment {
    return this.global.document.createComment(text);
  }
  createDocumentFragment(): DocumentFragment {
    return this.global.document.createDocumentFragment();
  }
  createMutationObserver(callback: Function): MutationObserver {
    throw new Error("NotImplementedException");
  }
  createCustomEvent(eventType: string, options: Object): CustomEvent {
    return new (<any>this.global.window).CustomEvent(eventType, options);
  }
  dispatchEvent(evt: Event): void {
    this.global.window.dispatchEvent(evt);
  }
  getComputedStyle(element: Element): CSSStyleDeclaration {
    return this.global.window.getComputedStyle(element);
  }
  getElementById(id: string): Element {
    return this.global.document.getElementById(id);
  }
  querySelectorAll(query: string): NodeList {
    return this.global.document.querySelectorAll(query);
  }
  nextElementSibling(element: Node): Element {
    //if (element.nextElementSibling) { return element.nextElementSibling; }
    do { element = element.nextSibling; }
    while (element && element.nodeType !== 1);
    return <Element>element;
  }
  createTemplateFromMarkup(markup: string): Element {
    
  }
  appendNode(newNode: Node, parentNode?: Node): void {

  }
  replaceNode(newNode: Node, node: Node, parentNode?: Node): void {

  }
  removeNode(node: Node, parentNode?: Node): void {

  }
  injectStyles(styles: string, destination?: Element, prepend?: boolean): Node {
  }
}

