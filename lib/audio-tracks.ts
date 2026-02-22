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
        coverUrl: "/music/justin-bieber/thumbnailify.com_youtube_thumbnail_Full_HD_2026-02-22_04-41-02.jpg",
        audioUrl: "/music/justin-bieber/Favorite Girl.mp3"
    },
    {
        id: "track-2",
        title: "Cyberpunk City Nights",
        artist: "Neon Synth",
        coverUrl: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=150&h=150&auto=format&fit=crop",
        audioUrl: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_5128ff3a86.mp3?filename=cyberpunk-2099-124953.mp3"
    },
    {
        id: "track-3",
        title: "Chill Coding Time",
        artist: "Dev Beats",
        coverUrl: "https://images.unsplash.com/photo-1534073307584-07fa481e186e?q=80&w=150&h=150&auto=format&fit=crop",
        audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8b8175782.mp3?filename=lofi-chill-medium-version-100236.mp3"
    }
];
