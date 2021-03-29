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
            window.location.replace('other/main.html');
        } else
        {
            console.log('nope');
        }
    }

    function checkforlogin()
    {
        if(localStorage.getItem('loggedIn'))
        {
            window.location.replace('other/main.html');
        }
    }

    checkforlogin();

    login.addEventListener('click', checkpassword);
}