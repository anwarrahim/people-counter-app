

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

// save-btn

let saveCount = document.getElementById("save-num");

function save(){
    if (count > 0){
        saveCount.textContent += count + " - "
    }
    else{
    let selectNum=  document.getElementById("select-num")
        selectNum.textContent ="You cannot save ZERO";
    }

}






