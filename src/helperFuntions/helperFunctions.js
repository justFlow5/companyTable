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


export const sortASC = (arr, dataType) =>
    arr.sort((a, b) => (a[dataType] < b[dataType] ? -1 : a[dataType] > b[dataType] ? 1 : 0));


export const sortDESC = (arr, dataType) =>
    arr.sort((a, b) => (a[dataType] > b[dataType] ? -1 : a[dataType] < b[dataType] ? 1 : 0));