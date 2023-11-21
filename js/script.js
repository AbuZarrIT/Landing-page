/* 

//this is button for modal for user login and password

const modal = document.querySelector('.modal');
document.body.addEventListener('click', e => {
    if(e.target.classList.contains('modal-close-img')){
        modal.style.display = 'none';
    } else if(e.target.classList.contains('modal-container')){
        modal.style.display = 'none';
    } else if(e.target.classList.contains('menu__link-active')){
        modal.style.display = 'block';
    }
});

// this ist function for cards

class cards {
    constructor(imgSrc, altImg, title, description) {
      this.imgSrc = imgSrc;
      this.altImg = altImg;
      this.title = title;
      this.description = description;
    }
  
    addCards() {
        const div = document.querySelector('.cards-container');
        const newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="card">
            <img src=${this.imgSrc} alt=${this.altImg} class="card-img">
            <h2 class="card-title">${this.title}</h2>
            <p class="card-description my-description-class">${this.description}</p>    
        </div>`;
        div.append(newDiv);
    }
};

const arr = [];
fetch('http://localhost:3000/menu')
.then(data => data.json())
.then(data => {
   data.forEach(({img,altimg,title,descr}) => {
        new cards(img,altimg,title,descr).addCards()
   })
}) *//*  */

/* swiper */
