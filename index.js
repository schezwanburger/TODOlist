const arr = [];
display();
function display(){
    let ar = '';
arr.forEach((todoObject,index)=>{ 
const {name,duedate}=todoObject;
const html = `
<div>${name}</div>
<div>${duedate}</div>
<button class="deletebutton" onclick="arr.splice(${index},1);display();">Delete</button>`;
ar += html;
})
 document.querySelector('.jslist').innerHTML = ar ;
}

function additems(){
const item = document.querySelector('.todoitems');
const it = item.value;
const dateinput = document.querySelector('.todotime');
const te = dateinput.value;
 arr.push({
name:it,
duedate:te});
 console.log(arr);
 item.value = '';
 display();
}
document.body.addEventListener('keydown',(event)=>{
   if(event.key === 'Enter'){
    additems();
   }
});
document.querySelectorAll('.deletebutton').forEach((deletebutton,index)=>{
deletebutton.addEventListener('keydown',event=>{
    arr.splice(index,1); display();
});
});