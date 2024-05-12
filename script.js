function gradeChecker() {
    var score = inp.value
    const resultImage1 = document.getElementById('resultImage1')

    if(score>=80 && score<=100){
        resultImage1.src = 'images/a.jpg'
        console.log("A+");
        console.log(score);
    }else if(score>=70 && score<=79){
        resultImage1.src = 'images/b.jpg'
        console.log('B');
        console.log(score);
    }else if(score>=60 && score<=69){
        resultImage1.src = 'images/c.jpg'
        console.log('C');
        console.log(score);
    }else if(score>=50 && score<=59){
        resultImage1.src = 'images/d.jpg'
        console.log('D');
        console.log(score);
    }else if(score>=40 && score<=49){
        resultImage1.src = 'images/e.jpg'
        console.log('E');
        console.log(score);
    }else if(score>=0 && score<=39){
        resultImage1.src = 'images/f.jpg'
        console.log('F');
        console.log(score);
    }else{
        result.innerHTML = 'INVALID'
        result.style.color = 'black'
        console.log('invalid input');console.log(score);
    }
    inp.value = ''
}