// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let mostOccurance = 1;
    let letter = 0;
    let item;
    for (let i=0; i<str.length; i++)
    {
            for (let j=i; j<str.length; j++)
            {
                    if (str[i] == str[j])
                     letter++;
                    if (mostOccurance<letter)
                    {
                      mostOccurance=letter; 
                      item = str[i];
                    }
            }
            letter=0;
    }
    return item;
}

console.log (maxChar("cdddfc"))
// incomplete

module.exports = maxChar;
