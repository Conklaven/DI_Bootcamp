class video {
    constructor(videoTitle, videoUploader, videoTime) {
        this.title = videoTitle;
        this.uploader = videoUploader;
        this.time = videoTime;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} minutes of ${this.title}!`)
    }
}

let theMatrix = new video( "The Matrix", "Natalie", 120);
theMatrix.watch();