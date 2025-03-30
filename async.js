function prosesData(data) {
    return new Promise ((resolve, reject) => {
        console.log("Memproses data")
        setTimeout(()=> {
            if (data){
                resolve(`data ${data} berhasil di proses`);
            }else {
                reject("data tidak valid")
            }
        },2000);
    });
}

async function jalankanProses() {
    try{
        let hasil=await prosesData("User233510808");
        console.log(hasil)
    } catch (error){
        console.log(error)
    }
    
    
}
jalankanProses();