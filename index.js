const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
const fs = require('fs');

const writingFile = "./writingFile.txt"

function compress(string) {
    
    const splitArr = string.split(" ")
    let final = ""

    for (let i=0; i < splitArr.length; i++) {
        let data = splitArr[i][0] + String(splitArr[i].length)
        final += data
        final += "_"
    }
    final = final.substring(0, final.length - 1)
    return final
}

function decompress(string) {

    const splitArr = string.split("_")
    let final = ""

    for (let i = 0; i < splitArr.length; i++) {
        let data = splitArr[i][0].repeat(splitArr[i][1])
        final += data
        final += " "
    }
    final = final.substring(0, final.length - 1)
    return final
}

const writeToFile = (data, file) => {
    fs.writeFile(writingFile, data, err => {
    if (err) {
        console.error(err);
    }
         // dette er rot!!!!!
        console.log("File saved at: " + String(file));
    }
})}


readline.question("What function do you want to use? Compress / Decompress: ", func => {
    
    if (func === "Compress" || func === "compress") {
        readline.question("What file do you want to compress?", file => {
            const content = fs.readFileSync(file, {encoding: "utf-8"})
            const data = compress(content)
            writeToFile(data, file)
        })
    }
    else if (func === "Decompress" || func === "decompress") {
        readline.question("What file do you want to compress?", file => {
            const content = fs.readFileSync(file, {encoding: "utf-8"})
            const data = decompress(content)
            writeToFile(data, w)
        })
    }
    else {
        "noe"
    }
    
})



