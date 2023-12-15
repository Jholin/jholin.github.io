// membuat game suwit

// membangkitkan pilihan computer
function summonPilihanComputer () {
    const comp = Math.random();
    if (comp < 0.34)return 'gajah';
    if (comp > 0.33 && comp < 0.67)return 'orang';
    return 'semut';
}

console.log()

// membangkitkan aturan main
function gameRule(comp, player) {
    if (player == comp) return 'SERI!';
    if (player == 'semut') return (comp == 'gajah') ? 'MENANG!' : 'KALAH!';
    if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
};



const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function (pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = summonPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = gameRule(pilihanComputer, pilihanPlayer);
        console.log(pilihanComputer)
        console.log('ini player ' + pilihanPlayer)

        // mengubah gambar komputer
        const imgComp = document.querySelector('.img-computer');
        imgComp.setAttribute('src','assets/img/' + pilihanComputer + '.png')

        // mengubah papan score
        const info = document.querySelector('.info');
        info.innerHTML = hasil;

    })
});

