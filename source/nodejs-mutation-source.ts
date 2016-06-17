import {EventEmitter} from 'events';

//equality check: https://github.com/jasmine/jasmine/blob/11cfaae42ab31a494e005d36f49d8c1e089fed3b/src/core/matchers/matchersUtil.js#L77

export type Mutations = "mutations";

export class NodeJsMutationSource {
  private emitter: EventEmitter;
  private cycleMutations: MutationRecord[];
  private cycleTimerId: NodeJS.Timer;
  private targets: [{ node: Node, state: {} }];

  constructor(interval?: number) {
    interval = interval | 100;
    this.cycleTimerId = setInterval(() => this.cycle(), interval);
  }

  on: { (event: Mutations, cb: (mutations: MutationRecord[]) => void): void; } =
  (event: string, cb: ((mutations: MutationRecord[]) => void) | ((e: string) => void)) => {
    this.emitter.on(event, cb);
  }

  dispose() {
    clearInterval(this.cycleTimerId);
  }

  registerMutation(mutation: MutationRecord) {
    this.cycleMutations.push(mutation);
  }

  private cycle() {
    this.cycleDirtyCheck();
    this.cycleReport();
  }

  private cycleReport() {
    let mutations = this.cycleMutations;
    this.cycleMutations = [];
    this.emitter.emit("mutations", mutations);
  }

  private cycleDirtyCheck()
  {
    // TODO    
  }
}