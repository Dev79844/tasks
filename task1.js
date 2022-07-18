const findLongestWord = (str) => {
    const words = str.split(' ');
    const longestWord = words.reduce((longest, current) => {
        return current.length > longest.length ? current : longest;
    }, '');
    return longestWord;
}

console.log(findLongestWord('Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers'));