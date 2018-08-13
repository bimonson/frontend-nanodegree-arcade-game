// Enemies our player must avoid
var Enemy = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // If enemy is not passed boundary
        // Move forward
        // Increment x by speed * dt
    // else
        // Reset pos to start
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Hero class
class Hero {
    // Constructor
    constructor() {
        this.sprite = 'images/char-boy.png';
        this.horizMove = 101;
        this.vertMove = 83;
        this.startX = this.horizMove * 2;
        this.startY = (this.vertMove * 5) - 20;
        this.x = this.startX;
        this.y = this.startY;
    }
    // Methods
    // Draw player sprite on current x and y coord position
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    // Update position
    // Check collision here
        // Did player x and y collide with enemy?
    // Check win here
        // Did player x and y reach final tile?
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
    // Reset Hero
        // Set x and y to starting x and y
}


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

// New Hero object
const player = new Hero();

// Init allEnemies array
// For each enemy create and push new Enemy object into above array


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
