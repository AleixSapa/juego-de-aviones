namespace SpriteKind {
    export const Especial = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Projectil`, Jugador_1, 200, 0)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Especial, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Especial, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
let Nabes_Rojas: Sprite = null
let Nabe_Amarilla: Sprite = null
let projectile: Sprite = null
let Jugador_1: Sprite = null
scene.setBackgroundImage(assets.image`Fondo`)
Jugador_1 = sprites.create(assets.image`Jugador 1`, SpriteKind.Player)
Jugador_1.setPosition(20, 59)
controller.moveSprite(Jugador_1, 100, 100)
game.splash("Pulsa A Para Comenzar")
Jugador_1.setStayInScreen(true)
info.startCountdown(90)
game.onUpdateInterval(5000, function () {
    Nabe_Amarilla = sprites.create(assets.image`Enemigo Amarillo`, SpriteKind.Especial)
    Nabe_Amarilla.setPosition(scene.screenWidth(), randint(10, 110))
    Nabe_Amarilla.vx = -75
})
game.onUpdateInterval(1000, function () {
    Nabes_Rojas = sprites.create(assets.image`Enemigo Rojo`, SpriteKind.Enemy)
    Nabes_Rojas.setPosition(scene.screenWidth(), randint(10, 110))
    Nabes_Rojas.vx = -75
})
