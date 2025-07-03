export default class Player {
    constructor(name, id) {
        this.id = id
        this.name = name
        this.times = []
        this.lowestTime = 0
    }
    addTime(time) {
        this.times.push(time)
    }
    showStats() {
        const total = this.totalTime()
        const avg = this.averageTime(total)

        console.log(`\nGreat job, ${this.name}!
Total time: ${Math.round(total / 1000)} seconds
Average per riddle: ${(avg / 1000).toFixed(2)} seconds`)
    }
    totalTime() {
        let totalTime = 0
        this.times.forEach(time =>
            totalTime += time
        )
        return totalTime
    }
    averageTime(totalTime) {
        return totalTime / this.times.length
    }
    showBestTime() {
        console.log(this.lowestTime);

    }


}
