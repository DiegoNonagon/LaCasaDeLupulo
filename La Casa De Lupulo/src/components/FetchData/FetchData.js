const productos = [
    {
        id: 1,
        nombre: "Berliner Guayaba",
        marca: "Fauna",
        img: "./assets/fauna1.jpg",
        estilo: "BERLINER",
        precio: 80
    },
    {
        id: 2,
        nombre: "Bruja Del Pacífico",
        marca: "Fauna",
        img: "./assets/fauna2.jpg",
        estilo: "RAINFOREST IPA",
        precio: 80
    },
    {
        id: 3,
        nombre: "Danza Macabra",
        marca: "Fauna",
        img: "./assets/fauna3.jpg",
        estilo: "MILK STOUT",
        precio: 80
    },
    {
        id: 4,
        nombre: "Helium",
        marca: "Fauna",
        img: "./assets/fauna4.jpg",
        estilo: "LAGER, PILSNER",
        precio: 80
    },
    {
        id: 5,
        nombre: "Penélope",
        marca: "Fauna",
        img: "./assets/fauna5.jpg",
        estilo: "ROBUST PORTER",
        precio: 80
    },
    {
        id: 6,
        nombre: "Cuatrimoto",
        marca: "Hércules",
        img: "./assets/Hercules1.png",
        estilo: "WHITE STOUT",
        precio: 90
    },
    {
        id: 7,
        nombre: "Húracan",
        marca: "Hércules",
        img: "./assets/hercules2.png",
        estilo: "DOBLE IPA",
        precio: 90
    },
    {
        id: 8,
        nombre: "Pie Grande",
        marca: "Hércules",
        img: "./assets/hercules3.png",
        estilo: "DARK CASCADIAN ALE",
        precio: 90
    },
    {
        id: 9,
        nombre: "Lanzallamas",
        marca: "Hércules",
        img: "./assets/hercules4.png",
        estilo: "RUSSIAN IMPERIAL STOUT",
        precio: 90
    },
    {
        id: 10,
        nombre: "Terrícola",
        marca: "Hércules",
        img: "./assets/hercules5.png",
        estilo: "SAISON",
        precio: 90
    },
    {
        id: 11,
        nombre: "Banquetera",
        marca: "Buqui Bichi",
        img: "./assets/buqui1.webp",
        estilo: "KÖLSCH",
        precio: 100
    },
    {
        id: 12,
        nombre: "Bichetera",
        marca: "Buqui Bichi",
        img: "./assets/buqui2.webp",
        estilo: "HAZY IPA",
        precio: 100
    },
    {
        id: 13,
        nombre: "Buena Bola",
        marca: "Buqui Bichi",
        img: "./assets/buqui3.webp",
        estilo: "WHEAT BEER",
        precio: 100
    },
    {
        id: 14,
        nombre: "Sahuaripa",
        marca: "Buqui Bichi",
        img: "./assets/buqui4.webp",
        estilo: "IPA",
        precio: 100
    },
    {
        id: 15,
        nombre: "Ultra Bichi",
        marca: "Buqui Bichi",
        img: "./assets/buqui5.webp",
        estilo: "ULTRA LAGER",
        precio: 100
    },
]

export default function fetchData() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })
}