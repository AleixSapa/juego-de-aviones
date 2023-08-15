namespace SpriteKind {
    export const Especial = SpriteKind.create()
    export const SuperAvion = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Especial, SpriteKind.SuperAvion, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    game.gameOver(false)
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
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.SuperAvion, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(5)
})
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        projectile = sprites.createProjectileFromSprite(assets.image`Projectil`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 200, 0)
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        projectile = sprites.createProjectileFromSprite(assets.image`Projectil`, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)), 200, 0)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Especial, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(3)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 100)
    info.changeScoreBy(1)
})
let Nabes_Rojas: Sprite = null
let Nabe_Amarilla: Sprite = null
let Nave_Lila: Sprite = null
let projectile: Sprite = null
scene.setBackgroundImage(assets.image`Fondo`)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`Jugador1`, SpriteKind.Player))
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`Jugador2`, SpriteKind.Player))
game.splash("Pulsa A Para Comenzar")
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(20, 59)
controller.moveSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 100, 100)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 100, 100)
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 100, 100)
info.startCountdown(90)
game.onUpdateInterval(5000, function () {
    Nave_Lila = sprites.create(assets.image`Enemigo Lila`, SpriteKind.SuperAvion)
    Nave_Lila.setPosition(scene.screenWidth(), randint(10, 110))
    Nave_Lila.vx = -75
})
game.onUpdateInterval(2000, function () {
    Nabe_Amarilla = sprites.create(assets.image`Enemigo Amarillo`, SpriteKind.Especial)
    Nabe_Amarilla.setPosition(scene.screenWidth(), randint(10, 110))
    Nabe_Amarilla.vx = -75
})
game.onUpdateInterval(1000, function () {
    Nabes_Rojas = sprites.create(assets.image`Enemigo Rojo`, SpriteKind.Enemy)
    Nabes_Rojas.setPosition(scene.screenWidth(), randint(10, 110))
    Nabes_Rojas.vx = -75
})
