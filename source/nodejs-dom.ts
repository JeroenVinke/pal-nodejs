import {IDom} from './dom';

/**
* Represents the core APIs of the DOM.
*/
export class NodeJsDom implements IDom {
  Element: Element;
  SVGElement: SVGElement;
  boundary: string;
  title: string;
  activeElement: Element;
  addEventListener(eventName: string, callback: Function, capture: boolean):void {

  }
  removeEventListener(eventName: string, callback: Function, capture: boolean):void {

  }
  adoptNode(node: Node): Node{
  }
  createElement(tagName: string): Element{

  }
  createTextNode(text: string): Text{

  }
  createComment(text: string): Comment{

  }
  createDocumentFragment(): DocumentFragment{

  }
  createMutationObserver(callback: Function): MutationObserver{

  }
  createCustomEvent(eventType: string, options: Object): CustomEvent{

  }
  dispatchEvent(evt: Event): void{

  }
  getComputedStyle(element: Element): CSSStyleDeclaration{

  }
  getElementById(id: string): Element{

  }
  querySelectorAll(query: string): NodeList{

  }
  nextElementSibling(element: Node): Element{

  }
  createTemplateFromMarkup(markup: string): Element{

  }
  appendNode(newNode: Node, parentNode?:Node): void{

  }
  replaceNode(newNode: Node, node: Node, parentNode?: Node): void{

  }
  removeNode(node: Node, parentNode?: Node): void{

  }
  injectStyles(styles: string, destination?: Element, prepend?:boolean): Node{    
  }
}

