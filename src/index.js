// eslint-disable-next-line prettier/prettier, no-unused-vars
import css from './main.css';
import albumModule from './albums';
import { doc } from 'prettier';

const list = albumModule.albumList;

albumModule.addAlbum('Album 1');
albumModule.addAlbum('Album 2');
albumModule.addAlbum('Album 3');
albumModule.addAlbum('Album 4');

albumModule.displayAlbum()
console.log(list);

const myFunction = () => {
  var x = document.getElementById("menu-items");
  if (x.style.display === "block") {
    x.style.display = "none";
    document.getElementById('nav').style = 'grid-template: 1fr / 1fr 5fr 0fr 1fr;'
  } else {
    x.style.display = "block";
    document.getElementById('nav').style = 'grid-template: 1fr 3fr / 1fr 5fr 0fr 1fr;'
    
  }
}

document.querySelector('.menu').addEventListener('click', myFunction)
