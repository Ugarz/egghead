function sleep(ms) {
    throw new Error('whoops')
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
console.log('Right away')

sleep(1000)
    .then(item => console.log('Fulfilled after 1s'))
    .then(item => sleep(1000))
    .then(item => console.log('Fulfilled after 2s'))
    .catch(error => console.log('error'))