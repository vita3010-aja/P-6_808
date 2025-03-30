function prosesData(data) {
    return new Promise((resolve, reject) => {
        console.log("Memproses data User....");
        setTimeout(()=>{
            if (data){
                resolve(`Data ${data} berhasil di proses`);
            }else {
                reject("data tidak di temukan")
            }
        }, 2000);
    });
}
prosesData("User-233510808")
    .then(hasil => console.log(hasil))
    .catch(eror => console.log(eror))