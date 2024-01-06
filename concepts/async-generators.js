const range = {
  from: 1,
  to: 10,
};

range[Symbol.asyncIterator] = async function* () {
    for(let current = this.from; current < this.to; current++) {
        console.log('range')
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();

            },400)
        })
        yield current;
    }
};

for await (let o of range) {
  console.log("o", o);  
}
