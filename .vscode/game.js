class GameScene extends Phaser.Scene {
  constructor() {
    super({ key: 'GameScene' });
  }

  preload() {
    this.load.image('player', '/img/player_sprite.png');
  }

  create() {
    // Initialize physics
    this.physics.arcade.enable();

    // Create player sprite
    this.player = this.physics.add.sprite(50, 50, 'player');
    console.log(this.player + 'player sprite created');

    // Set up touch controls
    this.input.on('pointerdown', this.handleTouchStart, this);
    this.input.on('pointermove', this.handleTouchMove, this);
    this.input.on('pointerup', this.handleTouchEnd, this);
  }

  handleTouchStart(pointer) {
    // Get touch position and calculate movement direction
    this.touchStartX = pointer.x;
    this.touchStartY = pointer.y;
  }

  handleTouchMove(pointer) {
    // Update player position based on touch movement
    this.player.x += pointer.x - this.touchStartX;
    this.player.y += pointer.y - this.touchStartY;
  }

  handleTouchEnd() {
    // Stop player movement when touch ends
    this.player.body.setVelocity(0, 0);
  }

  update() {
    // Check for collisions and other game logic
  }
}
