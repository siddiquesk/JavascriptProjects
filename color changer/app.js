let btn = document.querySelectorAll('.boxes');
let bdy = document.querySelector('body');

btn.forEach((dets) => {
  dets.addEventListener('click', (color) => {
    if (color.target.id === 'box1') {
      bdy.style.backgroundColor = '#3D0301';
      bdy.style.color = '#ccc';
    } else if (color.target.id === 'box2') {
      bdy.style.backgroundColor = '#57B4BA';
      bdy.style.color = '#ccc';
    } else if (color.target.id === 'box3') {
      bdy.style.backgroundColor = '#007074';
      bdy.style.color = '#ccc';
    } else if (color.target.id === 'box4') {
      bdy.style.backgroundColor = '#143D60';
      bdy.style.color = '#ccc';
    } else if (color.target.id === 'box5') {
      bdy.style.backgroundColor = '#A0C878';
      bdy.style.color = '#ccc';
    } 
  });
});
