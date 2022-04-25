/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
class Heap {
	constructor(func) {
		this.arr = [null];
		this.func = func;
	}
	
	swap(j, k) {
		const temp = this.arr[j];
		this.arr[j] = this.arr[k];
		this.arr[k] = temp;
	}
	
	compare(j, k) {
		return this.func(this.arr[j], this.arr[k]);
	}
	
	swim() {
		let cur = this.arr.length - 1;
		while(cur > 1) {
			const p = Math.floor(cur / 2);
			if (this.compare(p, cur)) break;
			this.swap(p, cur);
			cur = p;
		}
	}
	
	sink() {
		let cur = 1;
		const n = this.arr.length;
		
		while (cur * 2 < n) {
			let c = cur * 2;
			if (c+1 < n && this.compare(c+1, c)) c++;
			if (this.compare(cur, c)) break;
			this.swap(cur, c);
			cur = c;
		}
	}
	
	insert(ele) {
		this.arr.push(ele);
		this.swim();
	}
	
	top() {
		return this.arr[1];
	}
	
	pop() {
		this.swap(1, this.arr.length - 1);
		const top = this.arr.pop();
		this.sink();
		return top;
	}
	
	size() {
		return this.arr.length - 1;
	}
}

var findKthLargest = function(nums, k) {
    const minHeap = new Heap((a, b) => a < b);
	
	nums.forEach(num => {
		minHeap .insert(num);
        if (minHeap.size() > k) {
			minHeap.pop();
            
		} 

	});
	
	return minHeap.top();

};
