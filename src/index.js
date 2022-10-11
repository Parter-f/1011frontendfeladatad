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



})


