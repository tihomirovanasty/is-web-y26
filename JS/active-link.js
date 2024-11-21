window.addEventListener('load', () => {
    let pathname = document.location.pathname
    console.log(pathname)
    pathname = pathname.substring(pathname.lastIndexOf('/') + 1)
    document.querySelectorAll(`[href='./${pathname}']`).forEach(x => x.classList.add('active-link'))
})