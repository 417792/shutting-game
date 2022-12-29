input.onButtonPressed(Button.A, function () {
    shooter.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (quantity > 0) {
        quantity += -1
        bullet = game.createSprite(shooter.get(LedSpriteProperty.X), shooter.get(LedSpriteProperty.Y))
        bullet.set(LedSpriteProperty.Brightness, 100)
        for (let index = 0; index < 4; index++) {
            bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        bullet.delete()
    } else if (quantity == 0) {
        bullet.delete()
    }
})
input.onButtonPressed(Button.B, function () {
    shooter.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let shooter: game.LedSprite = null
let quantity = 0
quantity = 20
game.setScore(0)
let fighter = game.createSprite(0, 0)
shooter = game.createSprite(2, 4)
bullet = game.createSprite(4, 4)
bullet.set(LedSpriteProperty.Brightness, 0)
shooter.set(LedSpriteProperty.Brightness, 225)
fighter.set(LedSpriteProperty.Brightness, 200)
basic.forever(function () {
    basic.pause(500)
    fighter.change(LedSpriteProperty.X, 1)
    if (fighter.get(LedSpriteProperty.X) == 4) {
        basic.pause(500)
        fighter.set(LedSpriteProperty.X, 0)
        fighter.change(LedSpriteProperty.Y, 1)
    }
})
basic.forever(function () {
    if (bullet) {
        if (bullet.isTouching(fighter)) {
            game.addScore(1)
            fighter.set(LedSpriteProperty.X, 0)
            fighter.set(LedSpriteProperty.Y, 0)
        }
    }
})
basic.forever(function () {
    if (fighter.isTouching(shooter)) {
        if (game.score() >= 15) {
            basic.showString("You Win.")
            game.gameOver()
            basic.showNumber(game.score())
            basic.clearScreen()
        } else {
            basic.showString("You lose.")
            game.gameOver()
            basic.showNumber(game.score())
            basic.clearScreen()
        }
    }
})
