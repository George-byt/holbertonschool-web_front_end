const countPrimeNumbers = () => {
    let count = 0;
    let prime;

    for (let index = 2; index < 101; index++) {
        prime = true;
        for (let j = 2; j < index; j++){
            if (index % j == 0) {
                prime = false;
                break
            }
        }
        if (prime) {
            count += 1;
        }
    }
    return count;
}

const first = performance.now();
countPrimeNumbers();
const end = performance.now();
console.log(
    `Execution time of printing countPrimeNumbers was ${end - first} milliseconds.`
);
