
class Szazlabu
{
constructor(labakSzama){
this.labakSzama = labakSzama;
}
toString(){
    return(this.labakSzama + " lábú százlábú");
}
}

document.addEventListener('DOMContentLoaded' , ()=>{
    let tomb = [];
    for(let i = 0 ; i < 20 ; i++)
    {
        tomb.push(Math.floor(Math.random()*31));
    }
    console.log(tomb);
    /*
    let tombotteloszt = [];
    tomb.forEach(element => {
        if(element % 5 == 0){
            tombotteloszt.push(element);
        }
    });
    console.log(tomb);
    console.log(tombotteloszt);
    */


document.getElementById('gomb').addEventListener('click' , ()=>{

    let tombotteloszt = [];
    tomb.forEach(element => {
        if(element % 5 == 0){
            tombotteloszt.push(element);
        }
    });
    console.log(tombotteloszt);

})

document.getElementById('hozzaad').addEventListener('click' , () =>
{

    tomb.push(parseInt(document.getElementById('number').value))
    console.log(tomb);

})

console.log(new Szazlabu(100).toString());

let szazlabuszamtomb = [10, 15 , 20 , 25 , 30];



function labakbolSzazlabuk(randomtomb){
 
    let szazlabutomb = [];
    randomtomb.forEach(element => {
        let rovar = new Szazlabu(element);
        szazlabutomb.push(rovar);
    });
    return(szazlabutomb);
}
labakbolSzazlabuk(szazlabuszamtomb);


function szazlabuMejelenites(bekertomb , idbeker){

let szazlabuak = labakbolSzazlabuk(bekertomb);
let e = document.createElement(idbeker);

szazlabuak.forEach(element => {
    let li = document.createElement('li');

        li.innerHTML = element.toString();

        e.appendChild(li);

        document.body.appendChild(e);

});
}
szazlabuMejelenites(szazlabuszamtomb , 'ul')

});
