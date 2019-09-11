var pixl = 0.02822222222222222

var reelarea = Math.PI * 45 * 45
var tapearea = Math.PI * 90 * 90 - reelarea
var tapeminutearea = tapearea / 90

var lcx = 194.715
var rcx = 345.285
var cy = 169.74001

var rfactor = pixl * 360 * 360 * 2 * Math.PI;

function tfmt(a, cx, cy) {
    return 'rotate(' + a + ' ' + cx + ' ' + cy + ')'
}

function render() {
    var t = (performance.now()) / 60000
    var rightLoad = tapeminutearea * t
    var leftLoad = tapearea - rightLoad

    var leftRadius = Math.sqrt((reelarea + leftLoad) / Math.PI)
    var rightRadius = Math.sqrt((reelarea + rightLoad) / Math.PI)

    var leftAngle = rfactor * leftRadius
    var rightAngle = -rfactor * rightRadius

    leftClip.setAttribute('r', leftRadius)
    rightClip.setAttribute('r', rightRadius)

    leftHub.setAttribute('transform', tfmt(leftAngle, lcx, cy))
    leftReel.setAttribute('transform', tfmt(leftAngle, lcx, cy))
    rightHub.setAttribute('transform', tfmt(rightAngle, rcx, cy))
    rightReel.setAttribute('transform', tfmt(rightAngle, rcx, cy))

    if (t < 90) {
        window.requestAnimationFrame(render)
    }
}

window.requestAnimationFrame(render)
