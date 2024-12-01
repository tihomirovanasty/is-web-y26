function changeTheme(theme){
    if (theme == 'dark') {
        document.querySelectorAll(`[rel='stylesheet'][href='./css/styleIndex.css']`)[0].setAttribute('href', './css/styleDarkIndex.css');
        document.getElementById('img-logo').setAttribute('src', './Images/darkLogo.png')
    } else {
        document.querySelectorAll(`[rel='stylesheet'][href='./css/styleDarkIndex.css']`)[0].setAttribute('href', './css/styleIndex.css');
        document.getElementById('img-logo').setAttribute('src', './Images/logoo.png')
    }
}

window.addEventListener('load', () => {
    let current_theme = localStorage.getItem('current_theme');

    if (current_theme == 'dark') {
        changeTheme('dark')
    } else {
        localStorage.setItem('current_theme', 'bright')
    }

    document.getElementById('theme-switcher').addEventListener('click', () => {
        let theme = localStorage.getItem('current_theme')
        theme = theme == 'dark' ? 'bright' : 'dark'
        changeTheme(theme)
        localStorage.setItem('current_theme', theme)
    })
})