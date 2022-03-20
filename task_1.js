const random_hex_color_code = () => {
    let n = (Math.random() * 1000000000000000).toString(16);
    return '#' + n.slice(0, 6);
};

console.log(random_hex_color_code())