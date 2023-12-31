namespace SpriteKind {
    export const key1 = SpriteKind.create()
    export const spotlight = SpriteKind.create()
    export const door1 = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    create_level_one()
})
function create_level_two () {
    mySprite.destroy()
    mySprite4.destroy()
    mySprite5 = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
        `, SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.key1, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite4.setPosition(randint(30, 125), randint(30, 80))
})
function create_level_one () {
    if (info.score() == 5) {
        create_level_two()
    }
    mySprite2.destroy()
    mySprite3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 1 1 . . . 
        . . . . . . . . . . 1 a a 1 . . 
        . . . . . . . . . . 1 a a a 1 1 
        . . . . . . . . . . 1 a a 1 . . 
        . . . . . . . . . . 1 a 1 . . . 
        . . . . . . . . . . 1 a 1 . . . 
        . . . 1 1 1 1 1 1 . 1 a 1 . . . 
        . . 1 7 7 7 7 7 7 1 1 a 1 . . . 
        . 1 7 7 7 7 7 7 7 7 7 1 . . . . 
        1 7 7 7 7 7 7 7 7 7 1 . . . . . 
        1 7 7 7 7 7 7 7 7 1 . . . . . . 
        . 1 7 7 7 7 7 7 1 . . . . . . . 
        . . 1 1 1 1 1 1 . . . . . . . . 
        . . . . . . 1 . . . . . . . . . 
        . . . . . . 1 1 . . . . . . . . 
        `, SpriteKind.Player)
    mySprite3.setPosition(27, 26)
    controller.moveSprite(mySprite3)
    mySprite3.setStayInScreen(true)
    mySprite = sprites.create(img`
        ......555555555555555555......
        ...555555555555555555555555...
        ..55555555555555555555555555..
        .5555555555555555555555555555.
        .5555555555555555555555555555.
        .55555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        555555555555555555555555555555
        .55555555555555555555555555555
        .5555555555555555555555555555.
        .5555555555555555555555555555.
        ..55555555555555555555555555..
        ...555555555555555555555555...
        ......5555555555555555555.....
        `, SpriteKind.spotlight)
    mySprite.setBounceOnWall(true)
    mySprite.vx = randint(40, 55)
    mySprite.vy = randint(40, 55)
    mySprite4 = sprites.create(img`
        . . . . . . . . 
        . . . . . . . 5 
        5 5 5 . . 5 . 5 
        5 . 5 5 5 5 5 5 
        5 5 5 . . . . . 
        `, SpriteKind.key1)
    mySprite4.setPosition(128, 88)
}
let mySprite3: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
mySprite2 = sprites.create(img`
    ..................................................
    ..................................................
    ......777777......................................
    ...777.....777....................................
    ...7.........77...................................
    ...7...........7..................................
    ....7..........7..................................
    ....7...........7.................................
    ....7...........7.................................
    ....7...........7.................................
    ....777........77.................................
    ....7.777......7..................................
    ....7....777777.................777....777........
    ...77...................77777..7..77...7.77.......
    ...7.............7777...7...7..7...7...7..7.......
    ...7...........77...77..7...7...77.....7..........
    ...7...........7........77777....77....777........
    ....7..........7........7.........7.......7.......
    ....7..........77.......7.......7.7.......7.......
    .....7..........7.......7777....777....77.7.......
    .....7..........7..........77...........777.......
    ................7.................................
    ..................................................
    ..................................................
    ..................................................
    ............7777..................................
    ............7..77.................................
    ............7...77................................
    ............7....7................................
    ............77...7................................
    .............7..77................................
    .............7777.................................
    .............7...7................................
    .............7...7................................
    .............7....7...............................
    .............7....7...............................
    .............77777.....7..........................
    ......................7777........................
    ......................7...77....7..............7..
    ......................7....7....7..............7..
    ......7................777.77...7........777.77777
    ......7..................77.....7........7.....7..
    ......7...................77..77777......7.....7..
    ...7777777............7....7....7..7777..7.....7..
    ......7.....777.......7...77....7..7..7........7..
    ......7....77.77......77777.....7..77.777.........
    ......7....7...7........77......7...777.7.........
    .....77....77.7...................................
    ......7.....777...................................
    ..................................................
    `, SpriteKind.Player)
