

// program jalan
// membuat tanggal tujuan terlebih dahulu dengan membuat varialbe tujuan dilanjutkan dengan setring date
const tujuan = new Date('Jan 4 , 2022, 09:00:00').getTime();
console.log(tujuan);

const hitungmundur = setInterval(function(){

    // waktu sekarang
    const sekarang = new Date().getTime();
    // selisih waktu
    const selisih = tujuan - sekarang ;
    
    const hari = Math.floor(selisih/ (1000*60*60*24));
    const jam = Math.floor(selisih % (1000*60*60*24) / (1000*60*60));
    const menit = Math.floor(selisih% (1000*60*60) / (1000*60));
    const detik = Math.floor(selisih% (1000*60) / 1000);
    
    const days = document.getElementById('days');
    days.innerHTML = hari;
    const hours = document.getElementById('hours');
    hours.innerHTML = jam;
    const minutes = document.getElementById('minutes');
    minutes.innerHTML = menit;
    const seconds = document.getElementById('seconds');
    seconds.innerHTML = detik;

},1000);



// $('.page-scrol').on('click', function(e){


//     var tujuan = $(this).attr('href');
//     var elementujuan = $(tujuan);

//     $('body').animate({
//         scrollTop : elementujuan.offset().top - 50
//     },1250);

// e.preventDefault();

// });


