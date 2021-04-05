
let canvas;
let game;
let anim;

const PLAYER_HEIGHT = 5;
const PLAYER_WIDTH = 40;
const MAX_SPEED = 20;


document.addEventListener('DOMContentLoaded', function() {
    canvas = document.getElementById('canvas');
    game = {
        player: {
            score: 0
        },
        ball: {
            r: 5,
            speed: {}
        }
    };
    reset();
    draw();
    canvas.addEventListener('mousemove', playerMove);
    document.querySelector('#start-game').addEventListener('click', play);
    document.querySelector('#stop-game').addEventListener('click', stop);
});


function draw() {
    let context = canvas.getContext('2d');
    // Draw field
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    // Draw players
    context.fillStyle = 'white';
    context.fillRect(game.player.x, canvas.height-30, PLAYER_WIDTH, PLAYER_HEIGHT);
    // Draw ball
    context.beginPath();
    context.fillStyle = 'white';
    context.arc(game.ball.x, game.ball.y, game.ball.r, 0, Math.PI * 2, false);
    context.fill();
}

function reset() {
    document.querySelector('#won').textContent="";
    document.querySelector('#player-score').textContent = game.player.score;
    //Set ball and players to the center
    game.ball.x = canvas.width / 2;
    game.ball.y = canvas.height / 2;
    game.player.x = canvas.width / 2 - PLAYER_WIDTH / 2;
    // Reset speed
    game.ball.speed.y = 3;
    game.ball.speed.x = Math.random() * 3;
}

function play() {   
    draw();
    ballMove();
    anim = requestAnimationFrame(play);           
}

function stop() {
    cancelAnimationFrame(anim); 
    reset();
    draw();     
}

function ballMove() {
    // Rebounds on top and bottom
    if (game.ball.x > canvas.width || game.ball.x < 0) {
        game.ball.speed.x *= -1;
    }

    if (game.ball.y < 0) {
        game.ball.speed.y *= -1;
        game.player.score++;
        document.querySelector('#player-score').textContent = game.player.score;
    } 
    
    if (game.ball.y > canvas.height-30) {
        collide(game.player);
    }

    game.ball.x += game.ball.speed.x;
    game.ball.y += game.ball.speed.y;
}

function playerMove(event) {
    // Get the mouse location in the canvas
    let canvasLocation = canvas.getBoundingClientRect();
    let mouseLocation = event.clientX - canvasLocation.x;
    
    if (mouseLocation < PLAYER_WIDTH / 2) {
        game.player.x = 0;
    } else if (mouseLocation > canvas.width - PLAYER_WIDTH / 2) {
        game.player.x = canvas.width - PLAYER_WIDTH;
    } else {
        game.player.x = mouseLocation - PLAYER_WIDTH / 2;
    }
}

function changeDirection(playerPosition) {
    let impact = game.ball.x - playerPosition - PLAYER_WIDTH / 2;
    let ratio = 100 / (PLAYER_WIDTH / 2);

    // Get a value between 0 and 10
    game.ball.speed.x = Math.round(impact * ratio / 10);
    
    //to avoid vertical balls 
    if (game.ball.x < canvas.width/2)
    game.ball.x += 1;
    else
    game.ball.x += -1;
}

function collide(player) {
    // The player does not hit the ball
    if (game.ball.x < player.x || game.ball.x > player.x + PLAYER_WIDTH) {
        if (game.player.score > 15){
            document.querySelector('#won').innerHTML ="Congratulations you won!!! <br> The real name of Johan Qsel is<br> JOHANNES CUSELL."; 
        }else{
            document.querySelector('#won').innerHTML = "sorry, you lost!<br>PLAY AGAIN"; 
        }
        game.player.score=0;
        context.clear;
        stop();
        won();
       
    } else {
        // Change direction
        game.ball.speed.y *= -1;
        changeDirection(player.x);

        // Increase speed if it has not reached max speed
        if (Math.abs(game.ball.speed.y) < MAX_SPEED) {
            game.ball.speed.y *= 1.2;
        }
    }
}