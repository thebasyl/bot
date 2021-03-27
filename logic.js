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
            construction.classList.add('hidden');
        } else
        {
            console.log('nope');
        }
    }

    function checkforlogin()
    {
        if(localStorage.getItem('loggedIn'))
        {
            construction.classList.add('hidden');
        }
    }

    checkforlogin();

    login.addEventListener('click', checkpassword);
}