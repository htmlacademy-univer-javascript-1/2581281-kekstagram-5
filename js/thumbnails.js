const createPhotoElement = (photoData) => {
  // КРЧ функция, чтобы создавать DOM-элементы фотографий в разметке.
  // Она будет использована в дальнейшем в функции для отрисовки их в блок .pictures
  // Берем шаблон
  const pictureTemplate = document.querySelector('#picture').content;
  // Клонируем его
  const pictureElement = pictureTemplate.cloneNode(true);

  // Достаем эл-ты из шаблона
  const imgElement = pictureElement.querySelector('.picture__img');
  const likesElement = pictureElement.querySelector('.picture__likes');
  const commentsElement = pictureElement.querySelector('.picture__comments');

  // Заполняем данными
  /*
  Адрес изображения url подставьте как атрибут src изображения.
  Описание изображения description подставьте в атрибут alt изображения.
  Количество лайков likes выведите в блок .picture__likes.
  Количество комментариев comments выведите в блок .picture__comments.
  */
  imgElement.src = photoData.url;
  imgElement.alt = photoData.description;
  likesElement.textContent = photoData.likes;
  commentsElement.textContent = photoData.comments.length;

  return pictureElement;
};

const renderPhotos = (photos) => {
  const picturesContainer = document.querySelector('.pictures');
  const fragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoElement = createPhotoElement(photo);
    fragment.appendChild(photoElement);
  });

  picturesContainer.appendChild(fragment);
};
// Проверим
const tempData = [
  {
    url: 'img/upload-default-image.jpg',
    description: 'Пример описания',
    likes: 9 ** 9,
    comments: ['wtf', 'ayaya', 'wadaw', 'awaaa']
  },

];

renderPhotos(tempData);
