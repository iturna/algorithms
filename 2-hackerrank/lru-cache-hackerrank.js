debugger
class Cache {
    constructor(cap) {
        this.head = new Node("head", null, null);
        this.tail = new Node("tail", null, null);
        this.head.next = this.tail;
        this.tail.prdev = this.head;
        this.map = {};
        this.cap =  cap;
        this.length = 0;
        this.count = 0;
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
    
    addVal(key) {
        if(this.map[key]!==undefined) {
            this.makeRecent(this.map[key]);
            return;
        }
        
        let newNode = new Node(key);
        this.map[key] = newNode;
        this.addNode(newNode);
        this.length++;
        this.count++;
        if(this.cap < this.length) this.removeLast();
    }
    
    print() {
        let arr = [];
        let node = this.head.next;
        while(node.key!=="tail") {
            arr.push(node.key);
            node = node.next;
        }
        
        return arr;
    }

    getCount() {
      return this.count;
    }
}

class Node {
    constructor(key, next, prev) {
        this.key = key;
        this.next = next;
        this.prev = prev
    }
}

//var list = new LinkedList();
//list.addVal(2, 3);


function processData(input) {
    //Enter your code here
    if(input.split('').filter(a=>a==="\n").length>1) {
      input = input.split('\n');
      input.unshift(input.shift().split(' ')[1]);
      input = input.map(a => parseInt(a));
    } else {
      input = input.replace(/\n/g, " ").split(' ');
      input.shift();
    }

    // return input;

    let cap = input.shift();
    let cache = new Cache(cap);
    for(let i=0; i<input.length; i++) {
        cache.addVal(input[i]);
    }
    
    console.log(cache.getCount());
    console.log(cache.print().join(' '));
} 



let str  = `100 10 
79 
85 
42 
100 
68 
60 
33 
45 
57 
100 
62 
28 
63 `;


//  let str = `14 4
//  1 1 2 3 5 3 1 4 5 9 6 3 2 5`;

// let str = `30 6
// 1 2 1 4 3 6 5 2 1 4 5 6 9 8 7 5 6 3 2 1 4 5 6 9 8 5 3 2 1 2`;
processData(str);