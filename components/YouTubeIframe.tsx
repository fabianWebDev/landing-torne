export default function YouTubeIframe() {
    return (
        <div className="youtube-iframe">
            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/UL9Ub3YHEf0?autoplay=1&mute=1&loop=1&playlist=UL9Ub3YHEf0&controls=0&modestbranding=1&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
}