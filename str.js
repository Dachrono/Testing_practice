function stringLength(str) 
{
    const strLeng = str.length;
    if(strLeng > 1 && strLeng < 10) {
        return strLeng
    } else {
        throw Error('Conditions lengthfailed');
    }
}

module.exports = stringLength