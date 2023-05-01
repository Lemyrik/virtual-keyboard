/* создаем элемент input */

const input = document.createElement('TEXTAREA');
input.id = 'inputArea';

// добавляем созданный элемент на страницу
document.body.appendChild(input);
document.getElementById('inputArea').placeholder = 'Для смены языка нажмите Shift + Alt...';
