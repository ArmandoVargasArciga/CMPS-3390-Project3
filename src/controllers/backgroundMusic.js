import slow from '@/music/slow.mp3'
import medium from '@/music/mid.mp3'
import fast from '@/music/FAST.mp3'


class MusicManager {
  constructor() {
    this.slowMusic = null
    this.mediumMusic = null
    this.fastMusic = null
    this.currentMusic = null
    this.isPlaying = false
    this.currentSpeed = null  // 'slow', 'medium', 'fast'
  }

  initialize() {
    this.slowMusic = new Audio(slow)
    this.mediumMusic = new Audio(medium)
    this.fastMusic = new Audio(fast)

    this.slowMusic.loop = true
    this.mediumMusic.loop = true
    this.fastMusic.loop = true

    this.slowMusic.volume = 0.5
    this.mediumMusic.volume = 0.5
    this.fastMusic.volume = 0.5
  }

    //transitionMusic () {  }


    // Export a function to switch   based on WPM
    switchMusic (wpm) {
    let newMusic = null

    if (wpm < 40) {
        newMusic = this.slowMusic
    } else if (wpm < 70) {
        newMusic = this.mediumMusic
    } else {
        newMusic = this.fastMusic 
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


stopAll () {
    if (this.slowMusic){ this.slowMusic.pause()}
    if (this.mediumMusic){ this.mediumMusic.pause()} 
    if (this.fastMusic){ this.fastMusic.pause()}
    this.currentMusic = null
}


pause () {
    if (this.currentMusic) {
        this.currentMusic.pause()
        this.isPlaying = false
    }
}

resume () {
    if (this.currentMusic && !this.isPlaying) {
        this.currentMusic.play()
        this.isPlaying = true
    }
}

}

export const musicManager = new MusicManager()

