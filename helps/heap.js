class Heap {

    /**
     * Create a Heap
     * @param {function} compareFunction - compares child and parent element
     * to see if they should swap.  If return value is less than 0 it will
     * swap to prioritize the child.
     */
    constructor(compareFunction) {
        this.store = [];
        this.compareFunction = compareFunction;
    }
    
    peak() {
        return this.store[0];
    }
    
    size() {
        return this.store.length;
    }
    
    pop() {
        if (this.size() < 2) {
            return this.store.pop();
        }
        const result = this.store[0];
        this.store[0] = this.store.pop();
        this.heapifyDown(0);
        return result;
    }
    
    push(val) {
        this.store.push(val);
        this.heapifyUp(this.size() - 1);
    }
        
    heapifyUp(child) {
        while (child) {
            const parent = Math.floor((child - 1) / 2);
            
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                child = parent;
            } else {
                return child;
            }
        }
    }
    
    heapifyDown(parent) {
        while (true) {
            let [child, child2] = [1,2].map((x) => parent * 2 + x).filter((x) => x < this.size());
            if (this.shouldSwap(child2, child)) {
                child = child2;
            }
            
            if (this.shouldSwap(child, parent)) {
                [this.store[child], this.store[parent]] = [this.store[parent], this.store[child]]
                parent = child;
            } else {
                return parent;
            }
        }
    }
    
    shouldSwap(child, parent) {
        return child && this.compareFunction(this.store[child], this.store[parent]) < 0;
    }
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.maxHeap = new Heap(Heap.maxComparator);
    this.minHeap = new Heap(Heap.minComparator);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.peek() === null || num < this.maxHeap.peek()) {
        this.maxHeap.add(num);
    } else {
        this.minHeap.add(num);
    }
    
    if(this.maxHeap.size - this.minHeap.size > 1) {
        this.minHeap.add(this.maxHeap.poll());
    } else if(this.minHeap.size - this.maxHeap.size > 1) {
        this.maxHeap.add(this.minHeap.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size > this.minHeap.size) {
        return this.maxHeap.peek();
    } else if(this.maxHeap.size < this.minHeap.size) {
        return this.minHeap.peek();
    } else {
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
};


/** 
 *  Min Comparator
 */
Heap.minComparator = (a, b) => { return a - b; }

/** 
 *  Max Comparator
 */
Heap.maxComparator = (a, b) => { return b - a; }


//leetcode usage 
  const map = s.split('').reduce(function(agg, val) {
    if(agg.has(val)) agg.set(val, agg.get(val)+1);
    else agg.set(val, 1);
    return agg;
  }, new Map());
  
  const heap = new MaxPriorityQueue();
  for(let key of map.keys()) {
    heap.enqueue(key, map.get(key));
  }
  
  console.log(heap);
  console.log(heap.front());
  console.log(heap.back());
  console.log(heap.dequeue())
  console.log(heap.dequeue())
  console.log(heap.dequeue())
  
  return '';
