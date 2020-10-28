export const getRandomNumber = (max) => {
    const numberOne = Math.floor(Math.random() * max);
    let numberTwo = Math.floor(Math.random() * max); 
    while(numberOne == numberTwo) {
        numberTwo = Math.floor(Math.random() * max);
    }
    return [
        numberOne,
        numberTwo
    ]
}