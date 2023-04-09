export const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const unique = (x,i,a) => a.indexOf(x) == i;