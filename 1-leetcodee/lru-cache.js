
debugger
class LinkedList {
    constructor(cap) {
        this.head = new Node("head", null, null, null);
        this.tail = new Node("tail", null, null, null);
        this.head.next = this.tail;
        this.tail.prdev = this.head;
        this.map = {};
        this.cap =  cap;
        this.length = 0;
    }
    
    makeRecent(node) {
        let toMakeRecent = node;
        [node.prev.next, node.next.prev] = [node.next, node.prev];
        [toMakeRecent.next, toMakeRecent.prev, this.head.next.prev, this.head.next] = [this.head.next, this.head, toMakeRecent, toMakeRecent];
    }
    
    removeLast() {
        let toRemove = this.tail.prev;
        this.map[toRemove.key]=undefined;
        [toRemove.prev.next, toRemove.next.prev] = [toRemove.next, toRemove.prev];
        this.length--;
    }
    
    addNode(node) {
        let curr = this.head;
        [node.next, node.prev, curr.next.prev, this.head.next] = [curr.next, this.head, node, node];
    }
    
    addVal(key, val) {
        if(this.map[key]!==undefined) {
            this.map[key].val=val;
            this.makeRecent(this.map[key]);
            return;
        }
        
        let newNode = new Node(key, val);
        this.map[key] = newNode;
        this.addNode(newNode);
        this.length++;
        if(this.cap < this.length) this.removeLast();
    }
    
    getVal(key) {
        if(this.map[key]===undefined) {
            return -1
        }
        this.makeRecent(this.map[key]);
        return this.map[key].val;
    }
}

class Node {
    constructor(key, val, next, prev) {
        this.key = key;
        this.val = val;
        this.next = next;
        this.prev = prev
    }
}

//var list = new LinkedList();
//list.addVal(2, 3);

class LRUCache {
    
    constructor(cap){
        //your code here
        this.list = new LinkedList(cap);
    }
    
    /**
     * @param {number} key
     * @returns {number}
    */
    
    get(key)
    {
        //your code here
        return this.list.getVal(key);
    }
    
    
    /**
     * @param {number} key
     * @param {number} value
    */
    
    set(key, value)
    {
        //your code here
        this.list.addVal(key, value);
    }
}

let cache = new LRUCache(2);
cache.set(2,3);
cache.set(1,5);
cache.get(2);
cache.set(8,4);
cache.set(1,6);
cache.get(1);