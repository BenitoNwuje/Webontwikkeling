let tags = (tagName) => {
    //vul aan
    let specificTag = (str) => {
        return '<' + tagName + '>' + str + '</' + tagName + '>'
    }
    return specificTag;
}

let strong = tags('strong');
let em = tags('em');

console.log(strong('hallo'));
// <strong>hallo</strong>
console.log(em('daar'));
// <em>daar</em>