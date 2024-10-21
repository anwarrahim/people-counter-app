

let count = 0;

function increment(){
    // return count;
    count += 1;
    document.getElementById("counter-num").innerText = count;

    // count += 1;

}

function reset(){
    count=0;
    document.getElementById("counter-num").innerText = count;
}




