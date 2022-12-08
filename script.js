const Sentence_number=Math.floor(Math.random() *983);
async function getData(){
    
    response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,Sentence_number);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('StanD').innerHTML =row[0];
        
    })
}

async function getData2(){
    const response=await fetch('test.csv');
    const data =await response.text();
    //console.log(data);
    

    const rows =data.split('\n').slice(0,Sentence_number);
    rows.forEach(elt =>{
        const row=elt.split(',');
        
        document.getElementById('Para').innerHTML =row[1];
        
    })
}

// document.querySelectorAll("input")[2].addEventListener('input',getData);
// document.querySelectorAll("input")[2].addEventListener('input',getData2);

document.getElementById("id_num").addEventListener("click", getData)
document.getElementById("id_num").addEventListener("click", getData2)
document.getElementById("id_num").addEventListener("click",function(){
    document.getElementById("id_Num").value=Sentence_number;
})


