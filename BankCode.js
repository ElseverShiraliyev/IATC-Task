const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let esginazlar = {
  100: 10, // 100 manat sayı
  50: 10, // 50 manat sayı
  20: 10, // 20 manat sayı
  10: 10, // 10 manat sayı
  5: 10, // 5 manat sayı
  1: 10 // 1 manat sayı
};

rl.question('Zehmet olmasa meblegi girin: ', (amount) => {
  let miqdar; // esginaz sayi
  let qaliq = amount; // qalan miqdar

  console.log(`Girilen pul miqdari: ${amount} TL`);

  if (amount <= 0) {
    console.log("Teesuf ki emeliyyat y/yetirile bilinmir.");
    rl.close();
  } else {
    const notes = Object.keys(esginazlar).reverse();

    for (let i = 0; i < notes.length; i++) {
      const note = parseInt(notes[i]);
      miqdar = Math.floor(qaliq / note); // esginaz sayi

      if (miqdar > 0) {
        if (miqdar > esginazlar[note]) { // eger miqdar odenmezse butun pullardan istifade et
          miqdar = esginazlar[note];
        }

        console.log(`${note} manatliq esginazdan ${miqdar} eded istifade olunacaq.`);
        esginazlar[note] -= miqdar; // Esginaz sayini guncelle
        qaliq -= miqdar * note; // Umumi pul miqdarini guncelle

        if (qaliq === 0) {
          break; // Pul bitdikde sonlansin
        }
      }
    }

    console.log(`Qalan esginaz sayi: ${JSON.stringify(esginazlar)}`);
    rl.close();
  }
});
