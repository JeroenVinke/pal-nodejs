import {NodeJsMutationSource} from './nodejs-mutation-source';

//https://developer.mozilla.org/en/docs/Web/API/MutationObserver

export class NodeJsMutationObserver implements MutationObserver
{
    constructor(
        source:NodeJsMutationSource,  
        public callback:(changes:MutationRecord[], instance:MutationObserver)=>void )
    {        
    }

    disconnect(): void{
        throw new Error("NotImplementedException");
    }

    observe(target: Node, options: MutationObserverInit): void
    {
    }

    takeRecords(): MutationRecord[]{
        throw new Error("NotImplementedException");
    }

    private watch()
    {
    }
}
