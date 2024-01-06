function* generate() {
    yield 0;
    yield 1;
    yield 2;
    return "done";
}

const gen = generate();
// console.log(gen.next());
// console.log(gen.next());


for(let a of generate()) {
    console.log('a',a);
}

// console.log('Array',[...generate()])


const object = {
    items: ['abel','dante','nis', 'zelda'],
    [Symbol.iterator]: function* (){
        for (let item of this.items) {
            yield item + ' he,'
        }
    }
}

console.log('object',object, typeof object);
console.log('object items',...object)


function* infinite() {
    let count = 0;
    while(true) {
        yield "infinite " + count;
        count++;
    }
}

console.log("infi",infinite())