// eslint-disable-next-line prettier/prettier, no-unused-vars
import css from './main.css';
import albumModule from './albums';

const list = albumModule.albumList;

albumModule.addAlbum('Album 1');
albumModule.addAlbum('Album 2');
albumModule.addAlbum('Album 3');
albumModule.addAlbum('Album 4');

albumModule.displayAlbum()
console.log(list);
