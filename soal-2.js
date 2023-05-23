const hewanBuas = ["Harimau", "Singa", "Beruang", "Serigala"];
const hewanJinak = ["Kucing", "Kelinci", "Ayam"];

const gabungHewan = () =>{
    let newHewan = [...hewanBuas,...hewanJinak];
    console.log(newHewan);
}
gabungHewan();
const [ikan,wortel,beras] = hewanJinak;

const pemetaan= ((jenismakanan)=>{
    if(jenismakanan === "ikan"){
        return ikan
    }else if(jenismakanan === "wortel"){
        return wortel
    }else if(jenismakanan === "beras"){
        return beras
    }else{
        return "tidak ada"
    }
});

setTimeout(() => {
    console.log(pemetaan("ikan"));
   }, 5000);