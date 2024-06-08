function getChartHeight() {
    const width: number = window.innerWidth;
    if (width < 380) {
        return 200;
    } else if (width < 450) {
        return 250;
    } else if (width < 640) {
        return 350;
    } else if (width < 768) {
        return 400;
    } else if (width < 1024) {
        return 500;
    }
    return 600;
}

export { getChartHeight };
