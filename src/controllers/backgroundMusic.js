import slow from '@/music/slow.mp3'
import medium from '@/music/mid.mp3'
import fast from '@/music/FAST.mp3'

let slowMusic = null
let mediumMusic = null
let fastMusic = null
let currentMusic = null

// Export a function to initialize audio
export function initialize() {
    slowMusic = new Audio(slowSong)
    mediumMusic = new Audio(mediumSong)
    fastMusic = new Audio(fastSong)

    slowMusic.loop = true
    mediumMusic.loop = true
    fastMusic.loop = true

    return { slow, medium, fast}
}

// Export a function to switch   based on WPM
export function switchMusic (wpm) {
    let newMusic = null

    if (wpm < 40) {
        newMusic = slow 
    } else if (wpm < 70) {
        newMusic = medium 
    } else {
        newMusic = fast 
    }

    // If switching to different  
    if (newMusic !== current ) {
        // Pause current  
        if (current ) {
            current.pause()
        }

        // Play new  
        if (newMusic) {
            newMusic.play()
            current = newMusic
        }
    }
}

// Export function to stop all  
export function stopAll () {
    if (slow) slow.pause()
    if (medium) medium.pause()
    if (fast) fast.pause()
    current = null
}