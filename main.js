import kaboom from "https://kaboomjs.com/lib/0.5.1/kaboom.mjs";

const k = kaboom({
    width: 320, 
    height: 240, 
    scale: 2, 
    clearColor: [0, 0, 0, 1]
})

k.scene('test', () => {
    console.log('test scene loaded')
})

k.start('test')
