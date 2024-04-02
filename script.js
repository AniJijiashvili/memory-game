let container = document.querySelector('.container')
let images = [
    "img/1.png",
    "img/1.png",
    "img/2.png",
    "img/2.png",
    "img/3.png",
    "img/3.png",
    "img/4.png",
    "img/4.png",
    "img/5.png",
    "img/5.png",
    "img/6.png",
    "img/6.png",
    "img/7.png",
    "img/7.png",
    "img/8.png",
    "img/8.png",
    "img/9.png",
    "img/9.png",
    "img/10.png",
    "img/10.png",

]
let rand;

function game(a) {
    container.innerHTML = " "


    for (let i = 0; i < a; i++) {
        rand = Math.floor(Math.random() * images.length)


        let card = document.createElement('div')
        card.innerHTML = `
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <img src=" ${images[rand]}" alt="Avatar">
            </div>
            <div class="flip-card-front">
                <img src="img/back.png">
            </div>
        </div>
        </div>

        `
        images.splice(rand, 1)




        card.addEventListener('click', function () {
            let array=[]

            card.classList.add ('open')
            let openedCards = document.querySelectorAll('.open')

            setTimeout (function(){
                let src1 = openedCards[0].querySelector('img').src;
            array.push(`${src1}`)
           let src2 = openedCards[1].querySelector('img').src;
           array.push(`${src2}`)

           if (array.length >1){
            if (array[0] == array[1]){
                openedCards[0].classList.add('match')
                openedCards[1].classList.add('match')
            }else {

                openedCards[0].classList.remove('open')
                openedCards[1].classList.remove('open')
            }
           }
           array = [];


            }, 1000)

        })
        container.appendChild(card)
    }

}







//12 cards

let container1 = document.querySelector('.container')

let images1 = [
    "img/1.png",
    "img/1.png",
    "img/2.png",
    "img/2.png",
    "img/3.png",
    "img/3.png",
    "img/4.png",
    "img/4.png",
    "img/5.png",
    "img/5.png",
    "img/6.png",
    "img/6.png"


]
let random;
let scorePar = document.querySelector('.score');
scorePar.classList.add ('scorePar')
let score = 0; 



function gamewith12cards(a) {
    container1.innerHTML = " "
    scorePar.innerHTML=0;
  



    for (let i = 0; i < a; i++) {
        random = Math.floor(Math.random() * images1.length)


        let card = document.createElement('div')
        card.innerHTML = `
        <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-back">
                <img src=" ${images1[random]}" alt="Avatar">
            </div>
            <div class="flip-card-front">
                <img src="img/back.png">
            </div>
        </div>
        </div>
     
        `
        images1.splice(random, 1)

     


        card.addEventListener('click', function () {
            let array = []
           
           

            card.classList.add('open')
            let openedCards = document.querySelectorAll('.open')

            setTimeout(function () {
                let src1 = openedCards[0].querySelector('img').src;
                array.push(`${src1}`)
                let src2 = openedCards[1].querySelector('img').src;
                array.push(`${src2}`)
          

                if (array.length > 1) {
                    
                    if (array[0] == array[1]) {
                        openedCards[0].classList.add('match')
                        openedCards[1].classList.add('match')
                        score+=5
                    } else {

                        openedCards[0].classList.remove('open')
                        openedCards[1].classList.remove('open')
                        score-=2
                    }
                    scorePar.innerHTML = "score: "+ score
                    if (score == "-10"){
                        container1.innerHTML = ''
                        alert ('game over');
                       
                    }
            
                }
                array = [];
                


            }, 1000)
           

        })
   
        container1.appendChild(card)
    }

}



//შეკითხვები
//1) თამაშის დამთავრებისას, button-ზე კლიკზე(12 cards ან 24 cards)  ხანდახან სურათები არ გამოდის და საჭიროა გვერდი გადატვირთვა. 
//2)ქულების დაწერისას, თუ შუაში გამოიცნო და +5 დაიწერა, შემდეგ უკვე ურევს ქულების სისტემა. ყოველ კლიკზე ემატება ან აკლდება და აღარ ადარებს 2 ქარდს ერთმანეთს.  (რომ გავასწორებთ, 20 ქარდზეც გადავიტან იგივეს)
//3)თამაშის პერიოდში, ქარდები ხანდახან აღარ ბრუნდებიან უკან, შეიძლება გაიხსნას 5 ქარდი ერთად და მოგვიანებით ნელ-ნელა დაიწყოს გადაბრუნება. ამ ხუთ გახსნილ ქარდში, თუ ორი ერთნაირია, მაშინ არ ქრება. 
//4)გამქრალ ქარდებზე click-ზე ქულები მაინც ემატება. 
//5)კიდევ არის რაღაცა წვრილმანები, გატესტვისას გამოჩნდება. (მაგ: ერთი ქარდი უფრო მალე იხურება ხანდახან)
//6) ჩამატება მინდა ალერტის, როდესაც ყველა ქარდს გამოიცნობს იუზერი. 