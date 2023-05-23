
let identitas = {
    nama: "Peni Julianti",
    nim: "01022111018",
    email: "penijulianti1507@gmail.com",
};

let {nama,nim,email} = identitas;
console.log("Nama: " + nama,"\nNIM: " + nim,"\nEmail: " +email);

let satu= ["Kharisma Amalia","Putri Lestari"];
let dua= ["Melani Putri","Amelia Siregar"];
let tiga= ["Maypa Dea","Naily Rina"];
let newName = [...satu,...dua,...tiga];
console.log(newName);