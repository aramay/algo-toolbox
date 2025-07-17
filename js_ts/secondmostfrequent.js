function getSecondMostCharFreq(str) {
    console.log(str)
    const charCounts = new Map()

    for (const char of str){
        if (!charCounts.has(char)) {
            charCounts.set(char, 1)
        }
        
        else if (charCounts.has(char)){
            charCounts.set(char, charCounts.get(char) + 1)
        }
        // charCounts.set(char, charCounts.get(char) + 1)
        // charCounts.set(char, (charCounts.get(char) || 0) + 1)
    }
    console.log("charCounts ", charCounts)
    // 2. Convert to array and sort
  
    let temp = Array.from(charCounts)
    temp.sort((a , b) => {
        console.log("a ", a)
        console.log("b ", b)
    })
    console.log("temp ", temp)
    const sortedChars = Array.from(charCounts.entries()).sort((a , b) => b[1] - a[1])

    console.log("sortedChars ", sortedChars)

    // 3. Retrieve second most frequent

    if (sortedChars.length < 2){
        return null
    }

    // handle cases where multiple chars have same highest 
    let firstMaxCount = sortedChars[0][1]
    let secondMostCount = null;
    for (let i = 0; i < sortedChars.length; i++){
        if (sortedChars[i][1] < firstMaxCount){
            secondMostCount = sortedChars[i][1]
        }
    }
    return secondMostCount;
}

const testcase1 = getSecondMostCharFreq("programming")
console.log("testcase1 ", testcase1)