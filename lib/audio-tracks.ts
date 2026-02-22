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
        title: "Chill Coding Time",
        artist: "Dev Beats",
        coverUrl: "https://images.unsplash.com/photo-1534073307584-07fa481e186e?q=80&w=150&h=150&auto=format&fit=crop",
        audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b8175782.mp3?filename=lofi-chill-medium-version-100236.mp3"
    }
];
