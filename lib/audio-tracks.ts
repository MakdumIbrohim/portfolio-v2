export interface AudioTrack {
    id: string;
    title: string;
    artist: string;
    coverUrl: string;
    audioUrl: string;
}

export const audioTracks: AudioTrack[] = [
    {
        id: "track-1",
        title: "Favorite Girl",
        artist: "Justin Bieber",
        coverUrl: "/music/justin-bieber/favorite-girl/thumbnailify.com_youtube_thumbnail_Full_HD_2026-02-22_04-41-02.jpg",
        audioUrl: "/music/justin-bieber/favorite-girl/Favorite%20Girl.mp3"
    },
    {
        id: "track-2",
        title: "It's Only Me",
        artist: "Kaleb J",
        coverUrl: "/music/kaleb-j/its-only-me/thumbnailify.com_youtube_thumbnail_Full_HD_2026-02-22_04-51-41.jpg",
        audioUrl: "/music/kaleb-j/its-only-me/Kaleb J - It's Only Me Official Lyric Video (English Sub CC).mp3"
    },
    {
        id: "track-3",
        title: "Love Me",
        artist: "Justin Bieber",
        coverUrl: "/music/justin-bieber/love-me/maxresdefault.jpg",
        audioUrl: "/music/justin-bieber/love-me/Justin%20Bieber%20-%20Love%20Me.mp3"
    },
    {
        id: "track-4",
        title: "Baby ft. Ludacris",
        artist: "Justin Bieber",
        coverUrl: "/music/justin-bieber/baby/https___images.genius.com_01dfdad244aaade8895f737ef1b15562.565x565x1.jpg",
        audioUrl: "/music/justin-bieber/baby/Justin%20Bieber%20-%20Baby%20ft.%20Ludacris.mp3"
    },
    {
        id: "track-5",
        title: "Monokrom",
        artist: "Tulus",
        coverUrl: "/music/tulus/monokrom/monokrom.png",
        audioUrl: "/music/tulus/monokrom/TULUS%20-%20Monokrom%20(Official%20Music%20Video).mp3"
    }
];
