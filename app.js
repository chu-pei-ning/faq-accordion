const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  document.querySelectorAll('.accordion-content').forEach(content => {
    content.style.display = 'none'; // 先縮回所有內容
  });
  header.addEventListener('click', () => {  
    document.querySelectorAll('.accordion-content').forEach(content => {
      content.style.display = 'none'; // 再次縮回所有內容
    });  
    // 展開當前被點選的內容
    const content = header.nextElementSibling;
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
    }
  });
});