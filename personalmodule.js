const { Console } = require("console");

import { username } from 'app.js';
console.log(username);

function time()
{
    let tv =  new Date().getHours();
        
    if (tv > 5.5 && tv <= 11.5) return 'Good morning';
    else if(tv > 11.5 && tv <= 17.5) return 'Good day';
    else if(tv > 17.5 && tv <= 23.5) return 'Good evening';
    else return 'Good night';
}

console.log(time());