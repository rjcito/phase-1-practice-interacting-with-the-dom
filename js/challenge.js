//the first 6 (?) because they are in the HTML document, chrome already defines them, so if you go 
//into the console, and type "minus" it'll spit out the element from the HTML form 
/*const counterDisplay = document.getElementById('counter')
const minusButton = document.getElementById('minus')
const plusButton = document.getElementById('plus')
const heartButton = document.getElementById('heart')
const pauseButton = document.getElementById('pause')*/
const commentInput = document.getElementById('comment-input')
const commentForm = document.getElementById('comment-form')
const likesUl = document.querySelector('.likes')// this is where the sentences of what got likes will show up because its in a ul in HTML
const heartLikes = {}
//let count = 0; 
//we need to make sure to wait until after the DOMContentLoaded event is triggered to safely execute our code.
//By creating an event listener, we can keep our code from immediately firing when index.js is loaded
//The DOMContentLoaded event fires when your page's DOM is fully parsed from the underlying HTML
document.addEventListener("DOMContentLoaded", () => {
    minus.addEventListener("click", minusClick);//minusClick is a function we'll create later, click is the event
    plus.addEventListener("click", plusClick);//plusClick is a function we'll create later, has to be passed onto event listener for heart button
    heart.addEventListener("click", heartClick);//heartClick, fn that will be created later, passed onto event for heart button 
    pause.addEventListener("click", pauseClick);// pauseClick, fn that will be created later, passed onto event for pause button
    commentForm.addEventListener("submit", handleSubmit);//hanldeSbmit, fn that will be created later, passed to the submit event for the form

const startCounter = () => {
    setInterval(plusClick, 1000)
}
startCounter()
//you have to check if the value of the button is pause or resume 
function isRunning(){
    return (pause.innerText === "pause") ? true : false;
}

//create your functions 
function minusClick(){
    counter.innerHTML = parseInt(counter.innerText)-1;
}

function plusClick(){
    if(isRunning()){
        counter.innerHTML = parseInt(counter.innerText)+1;
        
    }    
}


function heartClick(){
    const time = parseInt(counter.innerText)
    heartLikes[time] ? heartLikes[time]+=1 : heartLikes[time] = 1;
    if(document.getElementById(`like${time}`)){
        document.getElementById(`like${time}`).innerText = `${time} was clicked ${heartLikes[time]} times`
        

    }else{
        const li = document.createElement('li')
        li.id = `like${time}`
        li.innerText = `${time} was liked ${heartLikes[time]} times`
        likesUl.appendChild(li)

    }
}

function pauseClick(){
    (pause.innerText === "pause") ? pause.innerText = "resume" : pause.innerText = "pause"
    const buttons = [minus, plus, heart]
    buttons.forEach((button) => {
        button.disabled = !button.disabled;
    })
    
}



//handleSubmit() is for the form where you add comments 
function handleSubmit(e){
    e.preventDefault()// in order to prevent the default behavior of the submit event, when our event listener "sees" the event, it needs to invoke the preventDefault() method on it
    const val = commentInput.value
    //solution 2 for adding a comment to the page
    list.innerHTML += `<p>${val}</p>` //in your innerHTML add something extra to what you already have. 
    commentForm.reset();//method that clears the form from what you previously wrote inside 
    }   
    //solution 1: 
    /*const p = document.createElement('p')
    p.textContent = val
    list.appendChild(p)*/
})


/*function addComment(comment){
    const p = document.createElement('p')
    p.textContent = `${comment}`
    console.log(p)
    let commentSection = document.getElementById('list')
    console.log(commentSection)
    document.commentSection.appendChild(p)

}*/


//last thing you need to do is disable ALL buttons when you hit the pause button
//when you hit pause, the button needs to turn to "resume"
//create an array of your buttons (because they are iterable), then 
//use forEach() (iterates through the array) and disable each button 