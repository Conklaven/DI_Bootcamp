class Video {
    constructor(videoTitle, videoUploader, videoTime) {
        this.title = videoTitle;
        this.uploader = videoUploader;
        this.time = videoTime;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} minutes of ${this.title}!`)
    }
}

let theMatrix = new Video( "The Matrix", "Natalie", 120);
theMatrix.watch();