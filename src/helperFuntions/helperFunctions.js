export const sumUp = (arr) =>
    arr.reduce((acc, currVal) => {
        currVal = parseFloat(currVal.value);
        return parseFloat((acc + currVal).toFixed(10));
    }, 0);


export const getLastMonth = () => {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let lastMonth = currentDate
        .getMonth()
        .toString()
        .padStart(2, "0");
    let result = `${currentYear}-${lastMonth}`;
    return result;
}


export const sortASC = (arr, key) =>
    arr.sort((a, b) => a[key] - b[key]);



export const sortDESC = (arr, key) =>
    arr.sort((a, b) => b[key] - a[key])