//https://developer.mozilla.org/en/docs/Web/API/MutationObserver

export class NodeJsMutationObserver implements MutationObserver
{
    constructor(public callback:(changes:MutationRecord[], instance:MutationObserver)=>void )
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

class NodeJsMutationRecord implements MutationRecord{
    addedNodes: NodeList;
    attributeName: string;
    attributeNamespace: string;
    nextSibling: Node;
    oldValue: string;
    previousSibling: Node;
    removedNodes: NodeList;
    target: Node;
    type: string;
}