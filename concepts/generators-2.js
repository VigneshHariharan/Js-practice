

function* gen() {
    yield* ["OGreat","se"];
    yield* "Work";
    yield "Pause"
}

const g = gen();
console.log('gen executed',g);
console.log('g yield',...g);