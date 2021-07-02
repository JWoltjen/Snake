import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

const k = kaboom({
    width: 320, 
    height: 240, 
    scale: 2, 
    clearColor: [0, 0, 0, 1]
})
function Snake() {
    const {
        add, 
        pos,
        rect,
        color,
        origin
    } = k

    add([
        pos(8, 8), 
        rect(16, 16),
        color(0, 1, 0),
        origin('center')
    ])
}

k.scene('snake', Snake)

k.start('snake')
