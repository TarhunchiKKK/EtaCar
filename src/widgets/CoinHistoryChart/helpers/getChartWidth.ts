function getChartWidth() {
    const width: number = window.innerWidth;
    if (width < 380) {
        return 300;
    } else if (width < 450) {
        return 370;
    } else if (width < 540) {
        return 420;
    } else if (width < 640) {
        return 500;
    } else if (width < 768) {
        return 640;
    } else if (width < 1024) {
        return 500;
    } else if (width < 1280) {
        return 600;
    }
    return 700;
}

export { getChartWidth };
