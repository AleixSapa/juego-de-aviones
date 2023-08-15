@namespace
class SpriteKind:
    Especial = SpriteKind.create()
    SuperAvion = SpriteKind.create()

def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(assets.image("""
        Projectil
    """), Jugador_1, 200, 0)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_countdown_end():
    game.game_over(True)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    sprites.destroy(otherSprite, effects.spray, 100)
    game.game_over(False)
sprites.on_overlap(SpriteKind.Especial, SpriteKind.player, on_on_overlap)

def on_on_overlap2(sprite2, otherSprite2):
    sprites.destroy(otherSprite2, effects.spray, 100)
    game.game_over(False)
sprites.on_overlap(SpriteKind.enemy, SpriteKind.player, on_on_overlap2)

def on_on_overlap3(sprite3, otherSprite3):
    sprites.destroy(otherSprite3, effects.spray, 100)
    info.change_score_by(5)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.SuperAvion, on_on_overlap3)

def on_on_overlap4(sprite4, otherSprite4):
    sprites.destroy(otherSprite4, effects.spray, 100)
    info.change_score_by(3)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.Especial, on_on_overlap4)

def on_on_overlap5(sprite5, otherSprite5):
    sprites.destroy(otherSprite5, effects.spray, 100)
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap5)

Nabes_Rojas: Sprite = None
Nabe_Amarilla: Sprite = None
Nave_Lila: Sprite = None
projectile: Sprite = None
Jugador_1: Sprite = None
scene.set_background_image(assets.image("""
    Fondo
"""))
Jugador_1 = sprites.create(assets.image("""
    Jugador 1
"""), SpriteKind.player)
Jugador_1.set_position(20, 59)
controller.move_sprite(Jugador_1, 100, 100)
game.splash("Pulsa A Para Comenzar")
Jugador_1.set_stay_in_screen(True)
info.start_countdown(90)

def on_update_interval():
    global Nave_Lila
    Nave_Lila = sprites.create(assets.image("""
        Enemigo Lila
    """), SpriteKind.Especial)
    Nave_Lila.set_position(scene.screen_width(), randint(10, 110))
    Nave_Lila.vx = -75
game.on_update_interval(5000, on_update_interval)

def on_update_interval2():
    global Nabe_Amarilla
    Nabe_Amarilla = sprites.create(assets.image("""
            Enemigo Amarillo
        """),
        SpriteKind.Especial)
    Nabe_Amarilla.set_position(scene.screen_width(), randint(10, 110))
    Nabe_Amarilla.vx = -75
game.on_update_interval(2000, on_update_interval2)

def on_update_interval3():
    global Nabes_Rojas
    Nabes_Rojas = sprites.create(assets.image("""
        Enemigo Rojo
    """), SpriteKind.enemy)
    Nabes_Rojas.set_position(scene.screen_width(), randint(10, 110))
    Nabes_Rojas.vx = -75
game.on_update_interval(1000, on_update_interval3)
