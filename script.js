const colorThemes = document.querySelectorAll('[name="theme"]');

// Store theme

const storeTheme = function(theme) {
    localStorage.setItem('theme', theme)
}

const retrieveTheme = function() {
    const activeTheme = localStorage.getItem('theme')
    colorThemes.forEach((theme) => {
        if (theme.id === activeTheme) {
            theme.checked = true;
        }
    })
}

colorThemes.forEach(theme => {
    theme.addEventListener('click', () => {
        storeTheme(theme.id)
    })
})


document.onload = retrieveTheme();