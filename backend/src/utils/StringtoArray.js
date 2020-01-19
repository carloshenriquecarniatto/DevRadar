module.exports = (arraString) => {
    return arraString.split(',').map(tech => tech.trim().toLowerCase());
}