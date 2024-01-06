const range = {
    from: 1,
    to: 10
}

range[Symbol.asyncIterator] = function(){

    return {
        current: this.from,
        last: this.to,
        async next() {
            await new Promise((resolve) => {
                setTimeout(() => { 
                    console.log("Timeout and current: ",this.current)
                    resolve()
                }, 800);
            })
            if(this.current < this.last) {
                return { value: this.current++, done: false }
            } else {
                return { value: this.current, done: true }
            }
        }
    }
   
} 

for await (let o of range) {
    console.log('o',o)
}