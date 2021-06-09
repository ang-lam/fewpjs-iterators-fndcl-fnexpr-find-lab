function superbowlWin(arr) {
    let result = arr.find( function(object) {return object.result === "W"})
    return !!result ? result.year : undefined
}
