onUiLoaded(() => {
    let confirm = true
    window.onbeforeunload = function(e) {
        if (confirm) {
            e.preventDefault()
            e.returnValue = ""
        }
    }
    const defaultReload = restart_reload
    window.restart_reload = (...args) => {
        confirm = false
        defaultReload.call(window, ...args)
    }
})