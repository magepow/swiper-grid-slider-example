function toggleFullscreen(elem) {

    if (!document.fullscreenElement) {
        elem.requestFullscreen().catch((err) => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
    } else {
        document.exitFullscreen();
    }
}