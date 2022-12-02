class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0
    this.intervalId = null
    this.centiseconds = 0
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(()=>{
      console.log('time is running')
      this.currentTime++
      if(printTimeCallback) printTimeCallback()
    },1000)
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60)
    return minutes
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60
    return seconds
  }

  getCentiseconds(){
    
    return this.centiseconds
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    if(value < 10 ){
      return `0${value}`
    } else {
      return `${value}`
    }
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId)
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0
  }

  split() {
    // ... your code goes here
    const minutes = this.computeTwoDigitNumber(this.getMinutes())
    const seconds = this.computeTwoDigitNumber(this.getSeconds())
    const splitTime = `${minutes}:${seconds}`
    console.log(splitTime)
    return splitTime
  }
}
