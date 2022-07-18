
function  superbowlWin(recordArray) {
    const found = recordArray.find(element => element.result === "W")
        if(found === undefined) {
            return undefined
        }
        else {
            return found.year
        }

}

//const found = array1.find(element => element > 10);