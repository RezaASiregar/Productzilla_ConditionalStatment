let cuaca = 'cerah';
let warnasepatuHitam = 'kosong';

if (cuaca == 'cerah'){
    console.log('Sumbul pergi membeli sepatu');
        if (warnasepatuHitam == 'ada'){
            console.log('Beli sepatu warna hitam dan kaos kaki hitam');
        } else{
            console.log('Beli sepatu warna putih dan kaos kaki putih')
        }
} else if (cuaca == 'buruk') {
    console.log('Sumbul memesan sepatu melalui online');
        if (warnasepatuHitam == 'kosong'){
            console.log('Beli sepatu warna putih dan kaos kaki putih');
        } else{
            console.log('Beli sepatu warna hitam dan kaos kaki hitam')
        }
}
console.log('Checkout');
