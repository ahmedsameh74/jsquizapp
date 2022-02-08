const correctAnswers = ['B', 'B', 'B', 'A', 'C', 'A', 'A', 'A', 'B', 'C', 'C', 'C', 'B', 'A', 'C', 'B', 'B', 'C', 'B', 'C'];
const form = document.querySelector('.quizz-form');
const result = document.querySelector('.result');
const name = document.querySelector('.intro').querySelector('input');
const failed = document.querySelector('.failed');
const message = document.querySelector('.message');
// console.log(name.e.target.value)
// console.log(name.value)


form.addEventListener('submit', e => {


    e.preventDefault();


    if(name.value === ""){
        scrollTo(0,0);
        failed.classList.remove('d-none');

        
    }else{
        failed.classList.add('d-none')
    let score = 0;


    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value,
        form.q8.value, form.q9.value, form.q10.value, form.q11.value, form.q12.value, form.q13.value, form.q14.value, form.q15.value,
        form.q16.value, form.q17.value, form.q18.value, form.q19.value, form.q20.value];


    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 5;
        }
    });
    // console.log(score);
    scrollTo(0,0);
    

    result.classList.remove('d-none');
    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('.score').textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
            result.querySelector('.username').textContent = `${name.value}`
        } else{
            output++;
        }
    }, 10);
    if(score >= 75 && score <= 100){
        // console.log('lets drink coffee')
        message.classList.remove('d-none');
        message.classList.add('text-success');
        message.textContent = "This is great, lets drink a coffee";
    } else if(score >= 50 && score <= 75){
        // console.log("that's not a problem")
        message.classList.remove('d-none');
        message.classList.add('text-primary');
        message.textContent = "that's not a problem";
    } else{
        // console.log('We need to talk!')
        message.classList.remove('d-none');
        message.classList.add('text-danger');
        message.textContent = "We need to talk!";
    }
    }
    
})