export default class FunctionThreshold {
  constructor(method, limit, timeframe) {
    this._name = 'FunctionThreshold';
    this.method = method;
    this.limit = limit;
    this.timeframe = timeframe;
    this.calls = [];
  }

  get name() {
    return this._name;
  }

  call() {
    const now = Date.now();
    const allowedMin = now - this.timeframe;
    let remove = 0;

    this.calls.forEach((call) => {
      if (call < allowedMin)
        remove++;
    });    

    if (remove !== 0)
      this.calls.splice(0, remove);

    if (this.calls.length > this.limit)
      throw new Error(`Reached threshold of ${this.limit} function executions in the last ${this.timeframe} ms.`);
    
    this.calls.push(now);
    return this.method.apply(this, arguments);
  }
}
