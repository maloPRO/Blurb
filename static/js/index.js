const albumModule = (function () {
  const albumList = [];
  class Album {
    constructor(title) {
      this.title = title;
    }
  }

  const addAlbum = (value) => {
    const newAlbum = new Album(value);
    albumList.push(newAlbum);
  };

  const displayAlbum = () => {
    let albumSlider = document.getElementById('album-slider');

    const addAlbum = document.createElement('div');
    addAlbum.textContent = '+';
    addAlbum.setAttribute('class', 'addAlbum');
    albumSlider.appendChild(addAlbum);

    albumList.forEach((album) => {
      albumSlider.removeChild(addAlbum);
      let albumGrid = document.createElement('div');
      albumGrid.setAttribute('class', 'album-grid');

      let albumTitle = document.createElement('div');
      albumTitle.setAttribute('class', 'album-title');

      let albumDisplayImage = document.createElement('div');
      albumDisplayImage.setAttribute('class', 'album-display-image');

      albumTitle.textContent = album.title;
      albumGrid.appendChild(albumTitle);
      albumGrid.appendChild(albumDisplayImage);

      albumSlider.appendChild(albumGrid);
      albumSlider.appendChild(addAlbum);
    })

  }

  return { albumList, addAlbum, displayAlbum };

})();

albumModule.addAlbum('Album one');
albumModule.addAlbum('Album two');
albumModule.addAlbum('Album three');

albumModule.displayAlbum()
console.log(albumModule.albumList)
