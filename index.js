import { writeFile } from 'fs';
// this is a comment
let name = process.argv[2];
writeFile('data.json', name, (err) => console.error('err ->', err));