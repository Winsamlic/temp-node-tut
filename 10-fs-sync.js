const {readFileSync,writeFileSync}=require('fs')
console.log('start');
const first=readFileSync('../content/first.txt','utf-8')
const second=readFileSync('../content/Second.txt','utf-8')

//console.log(first,'\n',second);

writeFileSync('../content/result-sync.txt',
`Here is the result: ${first}, ${second}`,
{flag:'a'}
)

console.log('Done with this task');
console.log('Starting the next one');
