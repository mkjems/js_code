
//Zeropads with a leading '+' or '-'
// (bool, number, number, [string]) -> str
const zeroPad = (negative, width, val, padding='') => {
    const padded = (negative ? '-' : ' ') + padding + Math.abs(val);
        return padded.length >= width ? padded : zeroPad(negative, width, val, '0'+ padding);
        }
