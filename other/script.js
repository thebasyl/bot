window.onload = function()
{
    const datsmin = document.getElementById('mainpicture');
    const text = document.getElementById('flash-text');
    const delay = ms => new Promise(res => setTimeout(res, ms));

    const datsminFunction = async () =>
    {
        text.style.animationPlayState = 'running';
        await delay(4000);
        text.style.animationPlayState = 'paused';
    }

    datsmin.addEventListener('click', datsminFunction);
}