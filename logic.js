window.onload = function()
{
    let password = 'datsminiscool420';
    const textfield = document.getElementById('input');
    const login = document.getElementById('login');
    const construction = document.getElementById('construction');

    function checkpassword()
    {
        if(textfield.value == password)
        {
            localStorage.setItem('loggedIn', true);
            window.location.replace("http://datsmin.xyz/bot/other/main.html");
        } else
        {
            console.log('nope');
        }
    }

    function checkforlogin()
    {
        if(localStorage.getItem('loggedIn'))
        {
            window.location.replace("http://datsmin.xyz/bot/other/main.html");
        }
    }

    checkforlogin();

    login.addEventListener('click', checkpassword);
}