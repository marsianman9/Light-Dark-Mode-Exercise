const toggleSwitch = document.querySelector('#checkbox');
const trans = () => {
    document.documentElement.classList.add('theme-transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
    }, 100);
}

function switchTheme(e) {
    if (e.target.checked) {
        trans();
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        trans();
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);