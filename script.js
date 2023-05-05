const moveableImage = document.querySelector('.moveable-image');
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;
console.log('img', moveableImage)

if (moveableImage) {
  moveableImage.addEventListener('mousedown', dragStart);
  
function dragStart(e) {

    console.log('e', e)
    
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;
  
    if (e.target === moveableImage) {
      isDragging = true;
    }
  }
  
  document.addEventListener('mousemove', drag);
  
  function drag(e) {
    if (isDragging) {
      e.preventDefault();
      
      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;
  
      xOffset = currentX;
      yOffset = currentY;
  
      setTranslate(currentX, currentY, moveableImage);
    }
  }
  
  document.addEventListener('mouseup', dragEnd);
  
  function dragEnd(e) {
    initialX = currentX;
    initialY = currentY;
  
    isDragging = false;
  }
} else {
  console.error('Moveable image element not found');
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}