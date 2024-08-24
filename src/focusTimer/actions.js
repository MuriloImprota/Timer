import state from "./state.js"
import * as timer from "./timer.js"
import * as el from "./elements.js"
import * as audio from "./sounds.js"

export function toggleRunning(){
 state.isRunning = document.documentElement.classList.add("running")
 timer.countDown()
 audio.buttonPressAudio.play()
}

export function reset(){
    state.isRunning = false
    document.documentElement.classList.remove("running")
    timer.updateDisplay()
    audio.buttonPressAudio.play()
}

export function set(){
    el.minutes.setAttribute("contenteditable" , true)
    el.minutes.focus()
}

export function toggleMusic(){
    state.isMute = document.documentElement.classList.toggle("music-on")
    if (state.isMute) {
        audio.musicBg.play()
        return
    }
    audio.musicBg.pause()
}