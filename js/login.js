document.getElementById('btn-submit').addEventListener('click',function(){
    //mailbox part...........
    const mailBox = document.getElementById('user-mail');
    const email = mailBox.value;
    //password part.........
    const passwordBox = document.getElementById('user-pass');
    const password = passwordBox.value;
    //verify email and password
    if(email=== 'ather.biswas0057@gmail.com' && password === 'Ather7890'){
        window.location.href = 'bank.html';
    }else{
        alert('Please enter your valid Email and Password');
    }
})