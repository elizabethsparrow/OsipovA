let login = 'ABC';
let password ='123';

function openWindow() {
  let inputLogin = document.getElementById('enter_login').value;
  let inputPassword = document.getElementById('enter_pass').value;
  if((inputLogin == login) & (inputPassword == password)){
    this.close();
    window.open('page.html');
  } else alert('try again');
}

function closeWindow() {
  this.close();
    window.open('index.html');
}