function sixEight() {
    for (x = 1; x <= 200; x++) {
        if (x % 6 === 0 && x % 8 === 0) {
            console.log("Shams_TIIDELab")
        } else if(x % 6 === 0){
            console.log("Shams")
        } else if (x % 8 === 0) {
            console.log("TIIDELab")
        } else {
            console.log(x)
        }
    }
}

sixEight()