class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }
  watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}!`;
  }
}

let v = new Video("The Wizard of Oz", "Daniella", 5400)
console.log(v.watch())

let v2 = new Video("Lion King", "Dovi", 6000)
console.log(v2.watch());
