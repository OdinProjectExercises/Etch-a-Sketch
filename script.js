function getRandomRGB() {
    // Generate random values between 0 and 255 for each RGB component
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
  
    // Return the RGB color as a string
    return `rgb(${red}, ${green}, ${blue})`;
  }



var sideSize;


const gridButton = document.querySelector(".button-container")
gridButton.addEventListener('click', () =>{
    sideSize = prompt("Enter the size of side");

    const gridElement = document.querySelector('.grid');
    
    gridElement.style.width = '960px';
    gridElement.style.height = '960px';

    for (let i=1; i<=sideSize**2; i++){
        const pixel = document.createElement('div');
        gridElement.appendChild(pixel);
        pixel.className = 'pixel-grid';
        pixel.style.width = `${960/sideSize}px`
    }

    const pixelGrid = document.querySelectorAll(".pixel-grid");
    pixelGrid.forEach((item) =>{
        item.addEventListener('mouseover', ()=>{
            item.className = 'pixel-colored';
            item.style.background = getRandomRGB();

            setTimeout(() =>{
                item.className = 'pixel-grid';
            }, 500);
        });
    });
    

});


















