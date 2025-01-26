const apiKey = '033c98c8bcfa32b05b34dc1f073dc121'; 
const userId = 'Piowithoutblood'; // Replace with your Last.fm username

fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userId}&api_key=${apiKey}&limit=1&format=json`)
  .then(response => response.json())
  .then(data => {
    if (data.recenttracks && data.recenttracks.track.length > 0) {
      const track = data.recenttracks.track[0];
      const trackName = track.name;
      const artistName = track.artist['#text'];
      const nowPlaying = track['@attr'] && track['@attr'].nowplaying;
      let albumImageUrl = track.image[2]['#text'];

      // Fallback if no album art is available
      if (!albumImageUrl) {
        albumImageUrl = '/path/to/default/image.jpg';
      }

      // Build the HTML content
      const albumArt = `<img src="${albumImageUrl}" alt="Album art for ${trackName}" style="margin-right: 1rem;">`;
      const trackInfo = `<small>${trackName} by ${artistName}</small>`;

      // Choose the GIF
      if (nowPlaying) {
        const waveGifUrl = 'Content/giphy.webp'
        const waveGif = `<img src="${waveGifUrl}" alt="Wave Animation" style="width: 200px; height: 50px;">`;
              // Insert content into the container
        const container = document.querySelector('.last-fm-info');
        if (container) {
          container.innerHTML = `${albumArt}${trackInfo}${waveGif}`;
        }
      }       
      else {
      // Insert content into the container
      const container = document.querySelector('.last-fm-info');
      if (container) {
        container.innerHTML = `${albumArt}${trackInfo}`;
      }
      }

  }
})
  .catch(error => {
    console.error('Error fetching Last.fm data:', error);
  });