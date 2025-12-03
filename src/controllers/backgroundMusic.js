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
    this.fastMusic = new Audio(fast) //loading everything into memory

    this.slowMusic.loop = true
    this.mediumMusic.loop = true // infirnite loop otherwise stops after one play
    this.fastMusic.loop = true

    this.slowMusic.volume = 0.1
    this.mediumMusic.volume = 0.1 // volume level 0.0 to 1.0 
    this.fastMusic.volume = 0.1
  }

    


    // Export a function to switch   based on WPM
    switchMusic (wpm) {
    let newMusic = null
    let newSpeed = null

    if (wpm < 15) {
        newMusic = this.slowMusic
        newSpeed = 'slow'
    } else if (wpm < 30) {
        newMusic = this.mediumMusic
        newSpeed = 'medium' 
    } else {
        newMusic = this.fastMusic 
        newSpeed = 'fast'
    }

    // If switching to different  
     //current = this.currentMusic; 
    if (newMusic !== this.currentMusic ) {
       if (this.currentMusic ) {
            this.currentMusic.pause()
        }

        // Play new  
        if (newMusic) {
            newMusic.play()
            this.currentMusic = newMusic
        }
    }
}


stopAll () {
    if (this.slowMusic){ this.slowMusic.pause()}
    if (this.mediumMusic){ this.mediumMusic.pause()} 
    if (this.fastMusic){ this.fastMusic.pause()}
    this.currentMusic = null;
    this.isPlaying = false;
    this.currentSpeed = null;
}

transitionMusic () {
    if (this.currentMusic != this.newMusic) {
        this.newMusic = 
        this.currentMusic
        this.currentMusic.currentTime 
        this.currentMusic.play()
    }
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

