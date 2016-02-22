let InMemory = function () {
    this.storage = {};
};

InMemory.prototype.getItem = function (key :string|number) :any {
    return this.storage[key];
};

InMemory.prototype.setItem = function (key :string|number, data :any) :any {
    return this.storage[key] = data;
};

let Storage = typeof localStorage !== 'undefined' ? localStorage : new InMemory();

export { Storage }

export default Storage
