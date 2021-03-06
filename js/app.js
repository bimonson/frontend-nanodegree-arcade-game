// Enemies our player must avoid
class Enemy {
    constructor(x, y) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        this.x = this.start;
        this.y = y + 55;
        this.horizMove = 101;
        this.speed = Math.floor(Math.random() * (600 - 300 + 1)) + 300;
        this.start = -this.horizMove;
        this.finish = this.horizMove * 5;

        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    };

    // Methods

    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.

        // If enemy is not passed boundary
        if(this.x < this.finish) {
            // Move forward
            // Increment x by speed * dt
            this.x += this.speed * dt;
        } else {
            // Reset pos to start
            this.x = this.start;
        }
    };

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Hero class
class Hero extends Enemy {
    // Constructor
    constructor() {
        super();
        this.sprite = 'images/char-boy.png';
        this.horizMove = 101;
        this.vertMove = 83;
        this.startX = this.horizMove * 2;
        this.startY = (this.vertMove * 4) + 55;
        this.x = this.startX;
        this.y = this.startY;
        this.victory = false;
    }
    // Methods
    // Draw player sprite on current x and y coord position
    render() {
        super.render();
    }

    update() {
        // Check collision here
        for(let enemy of allEnemies) {
            // Did player x and y collide with enemy?
            if (this.y === enemy.y && (enemy.x + enemy.horizMove/2 > this.x && enemy.x < this.x + this.horizMove/2)) {
                this.reset();
            }
        }
        // Check win here
        // Did player y reach final row?
        if(this.y === 55) {
            this.victory = true;
        }
    }

    // Update player's x and y porperty according to input
    handleInput(input) {
        switch(input) {
            case 'up':
                if(this.y > this.vertMove) {
                    this.y -= this.vertMove;
                }
                break;
            case 'right':
                if(this.x < this.horizMove * 4) {
                    this.x += this.horizMove;
                }
                break;
            case 'down':
                if(this.y < this.vertMove * 4) {
                    this.y += this.vertMove;
                }
                break;
            case 'left':
                if(this.x > 0) {
                    this.x -= this.horizMove;
                }
        }
    }
    // Reset Hero position to starting x and y
    reset() {
        this.x = this.startX;
        this.y = this.startY;
    }
}


// Now instantiate your objects.

// Place all enemy objects in an array called allEnemies
const beetle1 = new Enemy(-101*10, 0);
const beetle2 = new Enemy(-101, 83);
const beetle3 = new Enemy(-101, 83*2);
const allEnemies = [];

// Place the player object in a variable called player
// New Hero object
const player = new Hero();

// Init allEnemies array
// For each enemy create and push new Enemy object into above array
allEnemies.push(beetle1, beetle2, beetle3);


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
