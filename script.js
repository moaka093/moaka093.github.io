
 /*function validateform(){  
var name=document.myform.name.value;  
var password=document.myform.password.value;  
  
if (name==null || name==""){  
  alert("Name can't be blank");  
  return false;  
}else if(password.length<6){  
  alert("Password must be at least 6 characters long.");  
  return false;  
  }  
}*/ 

const name = document.getElementById('name');
const mailadress = document.getElementById('mailadress');
const postnummer = document.getElementById('postnummer');
const stad = document.getElementById('stad');
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Fyll i Namn')
    }

    if (mailadress.value === '' || mailadress.value == null) {
      messages.push('Fyll i mailadress')
    } 
    if (postnummer.value === '' || postnummer.value == null) {
    messages.push('Fyll i postnummer')
    }
    if (stad.value === '' || stad.value == null) {
  messages.push('Fyll i stad')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')

    }
        
})

function submitbutton() {
  alert('tack för ditt köp!');
}

document.getElementById('submit').onclick = submitbutton; 



document.getElementById('left-side-text').onclick = changeColor;   

function changeColor() {
    document.body.style.color = "purple";
    return false;
}  