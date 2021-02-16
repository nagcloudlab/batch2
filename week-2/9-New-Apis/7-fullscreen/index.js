

function getFullscreenElement() {
    return document.fullscreenElement;
}

function toggleFullscreen() {
    if (getFullscreenElement()) {
        document.exitFullscreen()
    } else {
        document.getElementById('box').requestFullscreen()
            .catch((e) => {
                console.log(e)
            })
    }
}
document.getElementById('box').addEventListener('dblclick', e => {
    toggleFullscreen()
})
document.addEventListener('fullscreenchange', () => {
    console.log('full screen changed')
})