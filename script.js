
const userInput=document.querySelector('.userinput')
const form =document.querySelector('form')
const result=document.querySelector('.result')
const Allgusess=document.querySelector('.Allgusess')
const AllgusessArray=[]
const submitbtn=document.querySelector('.submit-btn')
const startgamebtn=document.querySelector('.start-game');  
(function(){
let randomNumber=Math.round(Math.random() * 100)

form.addEventListener('submit', (e)=>{

    e.preventDefault()

    const userInputValue =parseInt(userInput.value)

    if(userInputValue < randomNumber)
    {
        result.innerText='Too low'
        //console.log('Too low')
    }else if(userInputValue > randomNumber)
    {  
        result.innerText='Too High'
        //console.log('Too High');
        
    }
    else{
        result.innerText='congratss!!!!'
        startgamebtn.disabled=false
        

    }
    AllgusessArray.push(userInput.value);
    Allgusess.innerText='Your Guesses is :' + AllgusessArray.join(', ')
    form.reset();
})

startgamebtn.addEventListener('click',()=>{

    result.innerText=' '
    Allgusess.innerText=' '
    startgamebtn.disabled=true
    randomNumber=Math.round(Math.random() * 100);


})
}
)()
 