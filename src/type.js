'use strict';

new TypeIt('.home__title--strong', {
  loop:true,
  speed: 100,
})
.move(-4)
.type('Yeonji ')
.move(null, {to: 'END'})
.type(' Lim')
.pause(1000)
.delete()
.type('Front-end Engineer')
.pause(1000)
.move(-9)
.delete(9)
.type('Back-end')
.pause(1000)
.delete(8)
.type('Full-stack')
.pause(1000)
.move(null, {to: 'END'})
.delete()
.go();