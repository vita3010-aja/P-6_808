function prosesData(data, callback) {
    console.log("Memproses data....");
    setTimeout(() => {
        callback(`Data ${data} telah di proses`);
    }, 2000);
}
prosesData("user-233510808", function(hasil){
    console.log(hasil)
});
