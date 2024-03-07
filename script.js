// funtion to set the theme on load or when the user selects a theme
function setTheme(themeName) {

    document.querySelector('body').style.backgroundColor = 'black';
    localStorage.setItem('Theme', themeName);
}
// funtion to toggle the theme between light and dark
function toggleTheme(){
    if (localStorage.getItem('theme')==='dark-theme') {
        setTheme('light-theme');
    }else{
        setTheme('dark-theme');
    }

    }
    //check if the user has a theme preference stored in local storage 
    if(localStorage.getItem('theme')) {
        setTheme(localStorage.getItem('theme'));
    } else { 
        setTheme('light-theme');//default theme
    }
    //Event listeners for theme button
    document.getElementById('light-theme').addEventListener('click',function()
    {
        setTheme('light-theme');
    });
    document.getElementById('dark-theme').addEventListener('click',function()
    {
        setTheme('dark-theme')
    });
