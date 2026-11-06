var theme = document.getElementById('cambiocolor');
var localTheme = localStorage.getItem('theme');
var base = document.getElementById("base");

if (localTheme === 'dark') {
    base.classList.add('bg-dark');
}

theme.addEventListener('change', function () {

    if (theme.value === 'oscuro') {
        base.classList.add('bg-dark')
    }
    else {
        base.classList.remove('bg-dark')
    }

    let isDark = base.classList.contains('bg-dark');

    localStorage.setItem('theme', isDark ? 'dark' : 'light')
});

/*function background() {
    let selector = document.getElementById("cambiocolor").val
    let base = document.getElementById("base");

    if (selector === 'oscuro') {
        base.classList.add('bg-dark')
        base.classList.remove('bg-secondary')
        base.classList.remove('bg-light')
    }
    else {
        base.classList.add('bg-light')
        base.classList.remove('bg-secondary')
        base.classList.remove('bg-dark')
    }
}
document.getElementById('cambiocolor').addEventListener("change", background);
*/