// src/controllers/typingController.js
import axios from 'axios'

// 1) Get text to type (same behavior as your loadtext)
export async function fetchBackgroundText() {
  const response = await fetch(
    'https://baconipsum.com/api/?type=all-meat&paras=2&format=text'
  )
  const currentText = await response.text()
  return currentText
}

// 2) Calculate words per minute (same logic as WordsPerMinuteCalculation)
export function calculateWPM(typingUser, timeElapsed) {
  const trimmed = typingUser.trim()
  if (!trimmed || timeElapsed <= 0) {
    return 0
  }

  const words = trimmed.split(/\s+/)
  return Math.round((words.length / timeElapsed) * 60)
}

// 3) Build colorLetter array (same logic as CheckingTyping)
export function buildColorLetter(typed, background) {
  const colorLetter = []

  // characters the user has typed
  for (let i = 0; i < typed.length; i++) {
    const Correct = background[i]
    const Typed = typed[i]

    let status = Typed === Correct ? 'correct' : 'incorrect'

    colorLetter.push({
      char: Typed,
      status,
    })
  }

  // remaining characters
  for (let i = typed.length; i < background.length; i++) {
    colorLetter.push({
      char: background[i],
      status: 'textLeftOver',
    })
  }

  return colorLetter
}

// 4) Send result to backend (same as sendResultToServer body)
export async function postTypingResult({ wpm, visitorId, requestId }) {
  return axios.post('http://localhost:3000/typing-result', {
    wpm,
    visitorId,
    requestId,
  })
}
