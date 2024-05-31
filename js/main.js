let webname=document.getElementById('nam')
let weburl=document.getElementById('Url')
let container=[]
if (localStorage.getItem('allweb')!=null){
    container=JSON.parse(localStorage.getItem('allweb'))
    displayweb()
   
}


function addWeb(){
   
        let web={
            name:webname.value,
            url:weburl.value
        }
        container.push(web)
        localStorage.setItem('allweb',JSON.stringify(container))
        displayweb()
        clearInput()
    }
   

function displayweb(){
    let cartona=""
    for (let i=0;i<container.length;i++){
        cartona+=`
        <tr>
        <td>${i+1}</td>
        <td>${container[i].name}</td>              
        <td>
          <a class="btn btn-success" href="${container[i].url}" target="_blank">Visit </a>
        </td>
        <td>
          <button class="btn btn-danger pe-2" onclick="deleteWeb(${i})"> Delete</button>
        </td>
    </tr>    
        `
    }
    document.getElementById('demo').innerHTML=cartona
}
function clearInput(){
    webname.value=""
    weburl.value=""
}
function deleteWeb(index){
    container.splice(index,1)
    localStorage.setItem('allweb',JSON.stringify(container))
    displayweb()
}
// function validateInput(hamo){
//     var validate={
//         nam:/^[A-Z][a-z]{4-15}$/,
//         Url:/^www[a-z]{4-15}$/
       
//     }
//     if (validate[hamo.id].test(hamo.value)){
//         hamo.classlist.replace('is-invalid','is-valid')
       
        
//     }else {
       
//         return false
//     }
// }