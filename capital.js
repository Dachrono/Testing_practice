function capital(string) { 
    const capitalStr = string.split('');
    capitalStr[0]= capitalStr[0].toUpperCase();
    return capitalStr.join('');
}

module.exports = capital;