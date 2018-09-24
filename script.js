$(document).ready(function(){
    $("#btn").on("click", function(){
        let number = Math.floor(Math.random()*answers.length);

        $("#answer").html(answers[number].answer);

    });
    
});

let answers = [
    {
        "answer": "As I see it, yes"
    },
    {
        "answer": "Ask again later"
    },
    {
        "answer": "Better not tell you now"
    },
    {
        "answer": "Cannot predict now"
    },
    {
        "answer": "Concentrate and ask again"
    },
    {
        "answer": "Don’t count on it"
    },
    {
        "answer": "It is certain"
    },
    {
        "answer": "It is decidedly so"
    },
    {
        "answer": "Most likely"
    },
    {
        "answer": "My reply is no"
    },
    {
        "answer": "My sources say no"
    },
    {
        "answer": "Outlook good"
    },
    {
        "answer": "Outlook not so good"
    },
    {
        "answer": "Reply hazy try again"
    },
    {
        "answer": "Signs point to yes"
    },
    {
        "answer": "Very doubtful"
    },
    {
        "answer": "Without a doubt"
    },
    {
        "answer": "Yes"
    },
    {
        "answer": "Yes, definitely"
    },
    {
        "answer": "You may rely on it"
    }
]


