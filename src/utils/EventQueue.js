function EventQueue() {
    collection = [];

    this.print = () => {
        console.log(collection)
    }

    this.enqueue = (e) => {
        collection.push(e)
    }

    this.dequeue = () => {
        return collection.shift()
    }

    this.front = () => {
        return collection[0]
    }

    this.size = () => {
        return collection.length
    }

    this.isEmpty = () => {
        return (collection.length === 0)
    }
}

export default EventQueue