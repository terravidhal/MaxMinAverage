
// 1-SList: Max
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }

  max() {
    // Find the maximum value in the linked list
    let current = this.head;
    let max = Number.NEGATIVE_INFINITY; // Initialize max with negative infinity(to ensure any positive value in the list will be considered larger)

    while (current) {
      if (current.data > max) {
        max = current.data;
      }
      current = current.next;
    }

    if (this.length() === 0) {
      // Handle empty list case
      return null;
    }

    return max;
  }

}

//2-SList: Min
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }

    min() {
      // Find the minimum value in the linked list
      let current = this.head;
      let min = Number.POSITIVE_INFINITY; // Initialize min with positive infinity
  
      while (current) {
        if (current.data < min) {
          min = current.data;
        }
        current = current.next;
      }
  
      if (this.length() === 0) {
        // Handle empty list case
        return null;
      }
  
      return min;
    }
  
  }
  
  //3-SList: Average

  class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class SLL {
    constructor() {
      this.head = null;
    }
  
    average() {
      // Calculate the average value in the linked list
      let sum = 0;
      let count = 0;
      let current = this.head;
  
      while (current) {
        sum += current.data; // Add node's data to the sum
        count++;
        current = current.next;
      }
  
      if (count === 0) {
        return null; 
      }
  
      return sum / count; 
    }

  }
  
