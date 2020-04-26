process.stdin.resume();
process.stdin.setEncoding('ascii');
var input = "";
process.stdin.on('data', function (data) {
    input += data;
});
process.stdin.on('end', function () {
    numbers = input.split("\n");
    sum = parseInt(numbers[0]) + parseInt(numbers[1])
    prod = parseInt(numbers[0]) * parseInt(numbers[1])
    process.stdout.write(sum+"\n"+prod+"\n");
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

}
