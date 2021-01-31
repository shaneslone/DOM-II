const globalOrder = 0;
const blocks = document.querySelectorAll('.block');

const blocksArr = Array.from(blocks);

console.log(blocksArr);
blocksArr.forEach(element => {
  element.addEventListener('click', () => {
    element.style.order = globalOrder - 1;
  });
});
