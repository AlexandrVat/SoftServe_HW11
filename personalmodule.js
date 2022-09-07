const { Console } = require("console");



function time(curUser)
{
    let tv =  new Date().getHours();
    let d = new Date(); 
   // console.log(curUser);    
    if (tv > 5.5 && tv <= 11.5) return `<p>${d.toString()}</p> <p>Good morning ${curUser}<p>`;
    else if(tv > 11.5 && tv <= 17.5) return `<p>${d.toString()}</p> <p>Good day ${curUser}<p>`;
    else if(tv > 17.5 && tv <= 23.5) return `<p>${d.toString()}</p> <p>Good evening ${curUser}<p>`;
    else return `<p>${d.toString()}</p> <p>Good night ${curUser}<p>`;
}

module.exports.ntime = time; 

//console.log(time());