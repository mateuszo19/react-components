function componentToHex(c: any) {
    let hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

function rgbToHex(r: string, g: string, b: string) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
