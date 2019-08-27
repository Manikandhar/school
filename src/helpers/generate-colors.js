export const getColors = {
    get
};

function get(length) {
    let result = [], border = [], i = 0;
    while (i <= length) {
        let randomR = Math.floor((Math.random() * 130) + 100),
            randomG = Math.floor((Math.random() * 130) + 100),
            randomB = Math.floor((Math.random() * 130) + 100);

        result.push(`rgba(${randomR}, ${randomG}, ${randomB}, 0.2)`);
        border.push(`rgb(${randomR}, ${randomG}, ${randomB})`);
    }
    return { result, border };
};