// module.exports.getDay = () => {
exports.getDay = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
    }
    
    return today.toLocaleString('en-IN', options)
}

// module.exports.getDay = () => { //this syntax will work the same as below
exports.getDayMonth = () => {
    const today = new Date();
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    }
    
    return today.toLocaleString('en-IN', options)
}