word1 = "Happy"
word2 = "hannah"

function palindromeCheck (word){
  let wordForwards = word.split("")
    for (i = 0; i < wordForwards.length; i++){
        if (wordForwards[i] !== wordForwards.length - i - 1){
            console.log(`${word} is not a palindrome`)
            return false
        }
    }
    console.log(`${word} is a palindrome`)
    return true
}

palindromeCheck(word1)
palindromeCheck(word2)
palindromeCheck("boom")

// function palindromeCheck (word){
//         let arrWord = word.split("")
//         let arrWordReverse = arrWord.reverse()
//         console.log(arrWord)
//         console.log(arrWordReverse)
// }

