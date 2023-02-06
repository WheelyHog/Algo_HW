class Node {
    data
    next

    constructor(data) {
        this.data = data
        this.next = null
    }
    setNext(next) {
        this.next = next
    }
}

class MyLinkedList {
    head
    constructor() {
        this.head = null
    }

    pushToHead(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
        } else {
            newNode.setNext(this.head)
            this.head = newNode
        }
    }

    pushToTail(data) {
        const newNode = new Node(data)
        if (this.head == null) {
            this.head = newNode
        } else {
            let node = this.head;
            while (node != null && node.next != null) {
                node = node.next
            }
            node.setNext(newNode)
        }
    }

    removeHead() {
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = null
            } else {
                const prevHead = this.head;
                this.head = this.head.next;
                prevHead.next = null
            }
        }
    }

    removeTail() {
        if (this.head != null) {
            if (this.head.next == null) {
                this.head = null
            } else {
                let node = this.head
                let prevNode = null
                while (node.next != null) {
                    prevNode = node
                    node = node.next
                }
                prevNode.next = null
            }
        }
    }

    print() {
        let node = this.head
        while (node != null) {
            console.log(node.data);
            node = node.next
        }
    }

    get(index) {
        let count = 0;
        let node = this.head
        while (count < index) {
            node = node.next
            ++count;
        }
        console.log(node.data);
    }

    pushToIndex(data, index) {
        let count = 0;
        const newNode = new Node(data)
        if (index == 0) {
            list.pushToHead(data)
        } else {
            let node = this.head;
            while (node != null && node.next != null) {                   
                if (count == index - 1) {
                    let prevNode = node
                    node.next = newNode                                 //Тут я запутался...
                    newNode.setNext(prevNode.next)
                } else {
                    node = node.next
                }
                count++
            }
        }
    }
}

// Первое задание получилось сделать, на втором я запутался...
// Мы только начали изучать классы, нет четкого представления, как манипулировать этими this.head, this.next

const list = new MyLinkedList();
list.pushToTail(5);
list.pushToTail(6);
// list.pushToTail(7)
// list.get(0);
list.pushToIndex(777, 1)
list.print()
console.log(list)