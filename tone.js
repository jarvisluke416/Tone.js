function playSound(frequency) {
    const actx = new (AudioContext || webkitAudioContext)();
    if (!actx) throw 'Not supported :(';

    const osc = actx.createOscillator();
    osc.type = 'sawtooth'; 
    osc.frequency.value = frequency; 
    osc.connect(actx.destination);
    osc.start();
    osc.stop(actx.currentTime + 1); 
}
document.addEventListener('keydown', function(event) {
    if (event.key === '1') {
        const button = document.getElementById('play');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(27.5); 
    }
});

document.getElementById('play').addEventListener('click', function() {
    playSound(27.5); 
});
document.getElementById('play').addEventListener('mouseenter', function() {
    playSound(27.5); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        const button = document.getElementById('play2');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(29.14); 
    }
});
document.getElementById('play2').addEventListener('click', function() {
    playSound(29.14); 
});
document.getElementById('play2').addEventListener('mouseenter', function() {
    playSound(29.14); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        const button = document.getElementById('play3');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(30.87); 
    }
});

document.getElementById('play3').addEventListener('click', function() {
    playSound(30.87); 
});
document.getElementById('play3').addEventListener('mouseenter', function() {
    playSound(30.87); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'z') {
        const button = document.getElementById('play4');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(32.70); 
    }
});
document.getElementById('play4').addEventListener('click', function() {
    playSound(32.70); 
});
document.getElementById('play4').addEventListener('mouseenter', function() {
    playSound(32.70); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '2') {
        const button = document.getElementById('play5');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(34.65); 
    }
});
document.getElementById('play5').addEventListener('click', function() {
    playSound(34.65); 
});
document.getElementById('play5').addEventListener('mouseenter', function() {
    playSound(34.65); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'w') {
        const button = document.getElementById('play6');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(36.71); 
    }
});
document.getElementById('play6').addEventListener('click', function() {
    playSound(36.71); 
});
document.getElementById('play6').addEventListener('mouseenter', function() {
    playSound(36.71); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 's') {
        const button = document.getElementById('play7');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(38.89); 
    }
});
document.getElementById('play7').addEventListener('click', function() {
    playSound(38.89); 
});
document.getElementById('play7').addEventListener('mouseenter', function() {
    playSound(38.89); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'x') {
        const button = document.getElementById('play8');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(41.20); 
    }
});
document.getElementById('play8').addEventListener('click', function() {
    playSound(41.20); 
});
document.getElementById('play8').addEventListener('mouseenter', function() {
    playSound(41.20); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '3') {
        const button = document.getElementById('play9');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(43.65); 
    }
});
document.getElementById('play9').addEventListener('click', function() {
    playSound(43.65); 
});
document.getElementById('play9').addEventListener('mouseenter', function() {
    playSound(43.65); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'e') {
        const button = document.getElementById('play10');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(46.25); 
    }
});
document.getElementById('play10').addEventListener('click', function() {
    playSound(46.25); 
});
document.getElementById('play10').addEventListener('mouseenter', function() {
    playSound(46.25); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'd') {
        const button = document.getElementById('play11');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(49.00); 
    }
});
document.getElementById('play11').addEventListener('click', function() {
    playSound(49.00); 
});
document.getElementById('play11').addEventListener('mouseenter', function() {
    playSound(49.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'c') {
        const button = document.getElementById('play12');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(51.91); 
    }
});
document.getElementById('play12').addEventListener('click', function() {
    playSound(51.91); 
});
document.getElementById('play12').addEventListener('mouseenter', function() {
    playSound(51.91); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '4') {
        const button = document.getElementById('play13');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(55.00); 
    }
});
document.getElementById('play13').addEventListener('click', function() {
    playSound(55.00); 
});
document.getElementById('play13').addEventListener('mouseenter', function() {
    playSound(55.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'r') {
        const button = document.getElementById('play14');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(58.27); 
    }
});
document.getElementById('play14').addEventListener('click', function() {
    playSound(58.27); 
});
document.getElementById('play14').addEventListener('mouseenter', function() {
    playSound(58.27); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'f') {
        const button = document.getElementById('play15');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(61.74); 
    }
});
document.getElementById('play15').addEventListener('click', function() {
    playSound(61.74); 
});
document.getElementById('play15').addEventListener('mouseenter', function() {
    playSound(61.74); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'v') {
        const button = document.getElementById('play16');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(65.41); 
    }
});
document.getElementById('play16').addEventListener('click', function() {
    playSound(65.41); 
});
document.getElementById('play16').addEventListener('mouseenter', function() {
    playSound(65.41); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '5') {
        const button = document.getElementById('play17');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(69.30); 
    }
});
document.getElementById('play17').addEventListener('click', function() {
    playSound(69.30); 
});
document.getElementById('play17').addEventListener('mouseenter', function() {
    playSound(69.30); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 't') {
        const button = document.getElementById('play18');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(73.42); 
    }
});
document.getElementById('play18').addEventListener('click', function() {
    playSound(73.42); 
});
document.getElementById('play18').addEventListener('mouseenter', function() {
    playSound(73.42); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'g') {
        const button = document.getElementById('play19');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(77.78); 
    }
});
document.getElementById('play19').addEventListener('click', function() {
    playSound(77.78); 
});
document.getElementById('play19').addEventListener('mouseenter', function() {
    playSound(77.78); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'b') {
        const button = document.getElementById('play20');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(82.41); 
    }
});
document.getElementById('play20').addEventListener('click', function() {
    playSound(82.41); 
});
document.getElementById('play20').addEventListener('mouseenter', function() {
    playSound(82.41); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '6') {
        const button = document.getElementById('play21');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(87.31); 
    }
});
document.getElementById('play21').addEventListener('click', function() {
    playSound(87.31); 
});
document.getElementById('play21').addEventListener('mouseenter', function() {
    playSound(87.31); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'y') {
        const button = document.getElementById('play22');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(92.50); 
    }
});
document.getElementById('play22').addEventListener('click', function() {
    playSound(92.50); 
});
document.getElementById('play22').addEventListener('mouseenter', function() {
    playSound(92.50); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'h') {
        const button = document.getElementById('play23');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(98.00); 
    }
});
document.getElementById('play23').addEventListener('click', function() {
    playSound(98.00); 
});
document.getElementById('play23').addEventListener('mouseenter', function() {
    playSound(98.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'n') {
        const button = document.getElementById('play24');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(103.83); 
    }
});
document.getElementById('play24').addEventListener('click', function() {
    playSound(103.83); 
});
document.getElementById('play24').addEventListener('mouseenter', function() {
    playSound(103.83); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '7') {
        const button = document.getElementById('play25');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(110.00); 
    }
});
document.getElementById('play25').addEventListener('click', function() {
    playSound(110.00); 
});
document.getElementById('play25').addEventListener('mouseenter', function() {
    playSound(110.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'u') {
        const button = document.getElementById('play26');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(116.54); 
    }
});
document.getElementById('play26').addEventListener('click', function() {
    playSound(116.54); 
});
document.getElementById('play26').addEventListener('mouseenter', function() {
    playSound(116.54); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'j') {
        const button = document.getElementById('play27');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(123.47); 
    }
});
document.getElementById('play27').addEventListener('click', function() {
    playSound(123.47); 
});
document.getElementById('play27').addEventListener('mouseenter', function() {
    playSound(123.47); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'm') {
        const button = document.getElementById('play28');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(130.81); 
    }
});
document.getElementById('play28').addEventListener('click', function() {
    playSound(130.81); 
});
document.getElementById('play28').addEventListener('mouseenter', function() {
    playSound(130.81); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '8') {
        const button = document.getElementById('play29');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(138.59); 
    }
});
document.getElementById('play29').addEventListener('click', function() {
    playSound(138.59); 
});
document.getElementById('play29').addEventListener('mouseenter', function() {
    playSound(138.59); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'i') {
        const button = document.getElementById('play30');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(146.83); 
    }
});
document.getElementById('play30').addEventListener('click', function() {
    playSound(146.83); 
});
document.getElementById('play30').addEventListener('mouseenter', function() {
    playSound(146.83); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'k') {
        const button = document.getElementById('play31');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(155.56); 
    }
});
document.getElementById('play31').addEventListener('click', function() {
    playSound(155.56); 
});
document.getElementById('play31').addEventListener('mouseenter', function() {
    playSound(155.56); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === ',') {
        const button = document.getElementById('play32');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(164.81); 
    }
});
document.getElementById('play32').addEventListener('click', function() {
    playSound(164.81); 
});
document.getElementById('play32').addEventListener('mouseenter', function() {
    playSound(164.81); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '9') {
        const button = document.getElementById('play33');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(174.61); 
    }
});
document.getElementById('play33').addEventListener('click', function() {
    playSound(174.61); 
});
document.getElementById('play33').addEventListener('mouseenter', function() {
    playSound(174.61); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'o') {
        const button = document.getElementById('play34');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(185.00); 
    }
});
document.getElementById('play34').addEventListener('click', function() {
    playSound(185.00); 
});
document.getElementById('play34').addEventListener('mouseenter', function() {
    playSound(185.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'l') {
        const button = document.getElementById('play35');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(196.00); 
    }
});
document.getElementById('play35').addEventListener('click', function() {
    playSound(196.00); 
});
document.getElementById('play35').addEventListener('mouseenter', function() {
    playSound(196.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '.') {
        const button = document.getElementById('play36');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(207.65); 
    }
});
document.getElementById('play36').addEventListener('click', function() {
    playSound(207.65); 
});
document.getElementById('play36').addEventListener('mouseenter', function() {
    playSound(207.65); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '0') {
        const button = document.getElementById('play37');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(220.00); 
    }
});
document.getElementById('play37').addEventListener('click', function() {
    playSound(220.00); 
});
document.getElementById('play37').addEventListener('mouseenter', function() {
    playSound(220.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'p') {
        const button = document.getElementById('play38');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(233.08); 
    }
});
document.getElementById('play38').addEventListener('click', function() {
    playSound(233.08); 
});
document.getElementById('play38').addEventListener('mouseenter', function() {
    playSound(233.08); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === ';') {
        const button = document.getElementById('play39');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(246.94); 
    }
});
document.getElementById('play39').addEventListener('click', function() {
    playSound(246.94); 
});
document.getElementById('play39').addEventListener('mouseenter', function() {
    playSound(246.94); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '/') {
        const button = document.getElementById('play40');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(261.63); 
    }
});
document.getElementById('play40').addEventListener('click', function() {
    playSound(261.63); 
});
document.getElementById('play40').addEventListener('mouseenter', function() {
    playSound(261.63); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '-') {
        const button = document.getElementById('play41');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(277.18); 
    }
});
document.getElementById('play41').addEventListener('click', function() {
    playSound(277.18); 
});
document.getElementById('play41').addEventListener('mouseenter', function() {
    playSound(277.18); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '[') {
        const button = document.getElementById('play42');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(293.66); 
    }
});
document.getElementById('play42').addEventListener('click', function() {
    playSound(293.66); 
});
document.getElementById('play42').addEventListener('mouseenter', function() {
    playSound(293.66); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Q') {
        const button = document.getElementById('play43');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(311.13); 
    }
});
document.getElementById('play43').addEventListener('click', function() {
    playSound(311.13); 
});
document.getElementById('play43').addEventListener('mouseenter', function() {
    playSound(311.13); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'A') {
        const button = document.getElementById('play44');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(329.63); 
    }
});
document.getElementById('play44').addEventListener('click', function() {
    playSound(329.63); 
});
document.getElementById('play44').addEventListener('mouseenter', function() {
    playSound(329.63); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Z') {
        const button = document.getElementById('play45');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(349.23); 
    }
});
document.getElementById('play45').addEventListener('click', function() {
    playSound(349.23); 
});
document.getElementById('play45').addEventListener('mouseenter', function() {
    playSound(349.23); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'W') {
        const button = document.getElementById('play46');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(369.99); 
    }
});
document.getElementById('play46').addEventListener('click', function() {
    playSound(369.99); 
});
document.getElementById('play46').addEventListener('mouseenter', function() {
    playSound(369.99); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'S') {
        const button = document.getElementById('play47');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(392.00); 
    }
});
document.getElementById('play47').addEventListener('click', function() {
    playSound(392.00); 
});
document.getElementById('play47').addEventListener('mouseenter', function() {
    playSound(392.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'X') {
        const button = document.getElementById('play48');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(415.30); 
    }
});
document.getElementById('play48').addEventListener('click', function() {
    playSound(415.30); 
});
document.getElementById('play48').addEventListener('mouseenter', function() {
    playSound(415.30); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'E') {
        const button = document.getElementById('play49');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(440.00); 
    }
});
document.getElementById('play49').addEventListener('click', function() {
    playSound(440.00); 
});
document.getElementById('play49').addEventListener('mouseenter', function() {
    playSound(440.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'D') {
        const button = document.getElementById('play50');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(466.16); 
    }
});
document.getElementById('play50').addEventListener('click', function() {
    playSound(466.16); 
});
document.getElementById('play50').addEventListener('mouseenter', function() {
    playSound(466.16); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'C') {
        const button = document.getElementById('play51');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(493.88); 
    }
});
document.getElementById('play51').addEventListener('click', function() {
    playSound(493.88); 
});
document.getElementById('play51').addEventListener('mouseenter', function() {
    playSound(493.88); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'R') {
        const button = document.getElementById('play52');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(523.25); 
    }
});
document.getElementById('play52').addEventListener('click', function() {
    playSound(523.25); 
});
document.getElementById('play52').addEventListener('mouseenter', function() {
    playSound(523.25); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'F') {
        const button = document.getElementById('play53');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(554.37); 
    }
});
document.getElementById('play53').addEventListener('click', function() {
    playSound(554.37); 
});
document.getElementById('play53').addEventListener('mouseenter', function() {
    playSound(554.37); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'V') {
        const button = document.getElementById('play54');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(587.33); 
    }
});
document.getElementById('play54').addEventListener('click', function() {
    playSound(587.33); 
});
document.getElementById('play54').addEventListener('mouseenter', function() {
    playSound(587.33); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'T') {
        const button = document.getElementById('play55');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(622.25); 
    }
});
document.getElementById('play55').addEventListener('click', function() {
    playSound(622.25); 
});
document.getElementById('play55').addEventListener('mouseenter', function() {
    playSound(622.25); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'G') {
        const button = document.getElementById('play56');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(659.26); 
    }
});
document.getElementById('play56').addEventListener('click', function() {
    playSound(659.26); 
});
document.getElementById('play56').addEventListener('mouseenter', function() {
    playSound(659.26); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'B') {
        const button = document.getElementById('play57');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(698.46); 
    }
});
document.getElementById('play57').addEventListener('click', function() {
    playSound(698.46); 
});
document.getElementById('play57').addEventListener('mouseenter', function() {
    playSound(698.46); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Y') {
        const button = document.getElementById('play58');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(739.99); 
    }
});
document.getElementById('play58').addEventListener('click', function() {
    playSound(739.99); 
});
document.getElementById('play58').addEventListener('mouseenter', function() {
    playSound(739.99); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'H') {
        const button = document.getElementById('play59');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(783.99); 
    }
});
document.getElementById('play59').addEventListener('click', function() {
    playSound(783.99); 
});
document.getElementById('play59').addEventListener('mouseenter', function() {
    playSound(783.99); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'N') {
        const button = document.getElementById('play60');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(830.61); 
    }
});
document.getElementById('play60').addEventListener('click', function() {
    playSound(830.61); 
});
document.getElementById('play60').addEventListener('mouseenter', function() {
    playSound(830.61); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'U') {
        const button = document.getElementById('play61');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(880.00); 
    }
});
document.getElementById('play61').addEventListener('click', function() {
    playSound(880.00); 
});
document.getElementById('play61').addEventListener('mouseenter', function() {
    playSound(880.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'J') {
        const button = document.getElementById('play62');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(932.33); 
    }
});
document.getElementById('play62').addEventListener('click', function() {
    playSound(932.33); 
});
document.getElementById('play62').addEventListener('mouseenter', function() {
    playSound(932.33); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'M') {
        const button = document.getElementById('play63');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(987.77); 
    }
});
document.getElementById('play63').addEventListener('click', function() {
    playSound(987.77); 
});
document.getElementById('play63').addEventListener('mouseenter', function() {
    playSound(987.77); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'I') {
        const button = document.getElementById('play64');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1046.50); 
    }
});
document.getElementById('play64').addEventListener('click', function() {
    playSound(1046.50); 
});
document.getElementById('play64').addEventListener('mouseenter', function() {
    playSound(1046.50); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'K') {
        const button = document.getElementById('play65');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1108.73); 
    }
});
document.getElementById('play65').addEventListener('click', function() {
    playSound(1108.73); 
});
document.getElementById('play65').addEventListener('mouseenter', function() {
    playSound(1108.73); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'O') {
        const button = document.getElementById('play66');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1174.66); 
    }
});
document.getElementById('play66').addEventListener('click', function() {
    playSound(1174.66); 
});
document.getElementById('play66').addEventListener('mouseenter', function() {
    playSound(1174.66); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'L') {
        const button = document.getElementById('play67');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1244.51); 
    }
});
document.getElementById('play67').addEventListener('click', function() {
    playSound(1244.51); 
});
document.getElementById('play67').addEventListener('mouseenter', function() {
    playSound(1244.51); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'P') {
        const button = document.getElementById('play68');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1318.51); 
    }
});
document.getElementById('play68').addEventListener('click', function() {
    playSound(1318.51); 
});
document.getElementById('play68').addEventListener('mouseenter', function() {
    playSound(1318.51); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '!') {
        const button = document.getElementById('play69');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1396.91); 
    }
});
document.getElementById('play69').addEventListener('click', function() {
    playSound(1396.91); 
});
document.getElementById('play69').addEventListener('mouseenter', function() {
    playSound(1396.91); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '@') {
        const button = document.getElementById('play70');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1480.00); 
    }
});
document.getElementById('play70').addEventListener('click', function() {
    playSound(1480.00); 
});
document.getElementById('play70').addEventListener('mouseenter', function() {
    playSound(1480.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '#') {
        const button = document.getElementById('play71');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1567.98); 
    }
});
document.getElementById('play71').addEventListener('click', function() {
    playSound(1567.98); 
});
document.getElementById('play71').addEventListener('mouseenter', function() {
    playSound(1567.98); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '$') {
        const button = document.getElementById('play72');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1661.22); 
    }
});
document.getElementById('play72').addEventListener('click', function() {
    playSound(1661.22); 
});
document.getElementById('play72').addEventListener('mouseenter', function() {
    playSound(1661.22); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '%') {
        const button = document.getElementById('play73');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1760.00); 
    }
});
document.getElementById('play73').addEventListener('click', function() {
    playSound(1760.00); 
});
document.getElementById('play73').addEventListener('mouseenter', function() {
    playSound(1760.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '^') {
        const button = document.getElementById('play74');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1864.66); 
    }
});
document.getElementById('play74').addEventListener('click', function() {
    playSound(1864.66); 
});
document.getElementById('play74').addEventListener('mouseenter', function() {
    playSound(1864.66); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '&') {
        const button = document.getElementById('play75');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(1975.53); 
    }
});
document.getElementById('play75').addEventListener('click', function() {
    playSound(1975.53); 
});
document.getElementById('play75').addEventListener('mouseenter', function() {
    playSound(1975.53); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '*') {
        const button = document.getElementById('play76');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2093.00); 
    }
});
document.getElementById('play76').addEventListener('click', function() {
    playSound(2093.00); 
});
document.getElementById('play76').addEventListener('mouseenter', function() {
    playSound(2093.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '(') {
        const button = document.getElementById('play77');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2217.46); 
    }
});
document.getElementById('play77').addEventListener('click', function() {
    playSound(2217.46); 
});
document.getElementById('play77').addEventListener('mouseenter', function() {
    playSound(2217.46); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === ')') {
        const button = document.getElementById('play78');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2349.32); 
    }
});
document.getElementById('play78').addEventListener('click', function() {
    playSound(2349.32); 
});
document.getElementById('play78').addEventListener('mouseenter', function() {
    playSound(2349.32); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '_') {
        const button = document.getElementById('play79');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2489.02); 
    }
});
document.getElementById('play79').addEventListener('click', function() {
    playSound(2489.02); 
});
document.getElementById('play79').addEventListener('mouseenter', function() {
    playSound(2489.02); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '+') {
        const button = document.getElementById('play80');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2637.02); 
    }
});
document.getElementById('play80').addEventListener('click', function() {
    playSound(2637.02); 
});
document.getElementById('play80').addEventListener('mouseenter', function() {
    playSound(2637.02); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '<') {
        const button = document.getElementById('play81');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2793.83); 
    }
});
document.getElementById('play81').addEventListener('click', function() {
    playSound(2793.83); 
});
document.getElementById('play81').addEventListener('mouseenter', function() {
    playSound(2793.83); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '>') {
        const button = document.getElementById('play82');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(2960.00); 
    }
});
document.getElementById('play82').addEventListener('click', function() {
    playSound(2960.00); 
});
document.getElementById('play82').addEventListener('mouseenter', function() {
    playSound(2960.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === ':') {
        const button = document.getElementById('play83');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(3135.96); 
    }
});
document.getElementById('play83').addEventListener('click', function() {
    playSound(3135.96); 
});
document.getElementById('play83').addEventListener('mouseenter', function() {
    playSound(3135.96); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '?') {
        const button = document.getElementById('play84');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(3322.44); 
    }
});
document.getElementById('play84').addEventListener('click', function() {
    playSound(3322.44); 
});
document.getElementById('play84').addEventListener('mouseenter', function() {
    playSound(3322.44); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '{') {
        const button = document.getElementById('play85');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(3520.00); 
    }
});
document.getElementById('play85').addEventListener('click', function() {
    playSound(3520.00); 
});
document.getElementById('play85').addEventListener('mouseenter', function() {
    playSound(3520.00); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '"') {
        const button = document.getElementById('play86');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(3729.31); 
    }
});
document.getElementById('play86').addEventListener('click', function() {
    playSound(3729.31); 
});
document.getElementById('play86').addEventListener('mouseenter', function() {
    playSound(3729.31); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '}') {
        const button = document.getElementById('play87');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(3951.07); 
    }
});
document.getElementById('play87').addEventListener('click', function() {
    playSound(3951.07); 
});
document.getElementById('play87').addEventListener('mouseenter', function() {
    playSound(3951.07); // Play A1 sound (27.5Hz) on hover
});
document.addEventListener('keydown', function(event) {
    if (event.key === '|') {
        const button = document.getElementById('play88');
        button.focus(); 
        button.click(); 
        button.classList.add('active'); 
        setTimeout(() => button.classList.remove('active'), 200); 
        playSound(4186.01); 
    }
});
document.getElementById('play88').addEventListener('click', function() {
    playSound(4186.01); 
});
document.getElementById('play88').addEventListener('mouseenter', function() {
    playSound(4186.01); // Play A1 sound (27.5Hz) on hover
});

