const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const {lists: [
    [,first],
    [,second],
    [,third]
]} = data

const result = []

const extractBiggest = () => {
    // insert 0 into empty arrays
    if (first.length === 0) {
        first.push(0)
    }
    if (second.length === 0) {
        second.push(0)
    }
    if (third.length === 0) {
        third.push(0)
    }
    // find largest of last items in the 3 arrays and pop it
	if (first.at(-1) > second.at(-1) && first.at(-1) > third.at(-1)) {
        return first.pop() 
    } 
    
    else if (second.at(-1) > first.at(-1) && second.at(-1) > third.at(-1)) {
        return second.pop()
    } 
    
    else if (third.at(-1) > first.at(-1) && third.at(-1) > second.at(-1)){
        return third.pop()
    } 
}

// Only edit above

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)