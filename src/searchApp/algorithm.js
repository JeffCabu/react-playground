import React from 'react'

const searchSentence = (arr, word) => {
  const matchedSentences = arr.filter(sentence => {
    return sentence.split(' ').includes(word)
  })
  return matchedSentences
}

console.log(searchSentence(sentences, 'is'))

// export default