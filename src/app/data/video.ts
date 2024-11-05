export type Video = {
    videoURL: string;
    imageURL: string;
    description: string;
    title: string;
}

const videos: Video[] = [
    {
        videoURL: "video/Vão-se Os Músicos _ Três Espiãs Demais.mp4",
        imageURL: "image/imegem1.jpg",
        description: "Episódio 1, Temporada 1.mp4",
        title: "Vão-se Os Músicos _ Três Espiãs Demais"
    },
    {
        // video 2
        videoURL: "video/Um Jogo de Crianças TRÊS ESPIÂS DEMAIS.mp4",
        imageURL: "image/imagem2.jpg",
        description: "Episódio 8, Temporada 1",
        title: "Um Jogo de Crianças _ TRÊS ESPIÂS DEMAIS"
    },
    {   //video 3
        videoURL: "video/As Viúvas Negras _ TRÊS ESPIÂS DEMAIS.mp4",
        imageURL: "image/imagem3.jpg",
        description: "Espisódio 17, Temporada 1",
        title: "As Viúvas Negras _ TRÊS ESPIÂS DEMAIS"
    }
]


export default videos;
