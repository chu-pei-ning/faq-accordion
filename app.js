const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');
const minusIcons = document.querySelectorAll('.minus');
const plusIcons = document.querySelectorAll('.plus');

// 初始值
contents.forEach((content) => {
  content.style.display = 'none';
});
minusIcons.forEach((icon) => {
  icon.style.display = 'none';
});


headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;

    // 檢查當前內容是否已展開
    const isContentVisible = content.style.display === 'block';

    // 隱藏所有內容、minus icon，顯示 plus icon
    contents.forEach((content) => {
      content.style.display = 'none';
    });
    plusIcons.forEach((icon) => {
      icon.style.display = 'inline'; // 顯示所有 plus
    });
    minusIcons.forEach((icon) => {
      icon.style.display = 'none'; // 隱藏所有 minus
    });

    // 如果當前內容未展開，則展開內容並顯示 minus 圖示
    if (!isContentVisible) {
      content.style.display = 'block';
      plusIcons[index].style.display = 'none';
      minusIcons[index].style.display = 'inline';
    }
  });
});