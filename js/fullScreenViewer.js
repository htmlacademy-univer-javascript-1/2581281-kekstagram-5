// fullScreenViewer.js
const bigPictureElement = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureElement.querySelector('.big-picture__cancel');
const bigPictureImage = bigPictureElement.querySelector('.big-picture__img img');
const likesCount = bigPictureElement.querySelector('.likes-count');
const commentsCount = bigPictureElement.querySelector('.comments-count');
const socialComments = bigPictureElement.querySelector('.social__comments');
const socialCaption = bigPictureElement.querySelector('.social__caption');
const commentCountContainer = bigPictureElement.querySelector('.social__comment-count');
const commentsLoader = bigPictureElement.querySelector('.comments-loader');
const body = document.querySelector('body');

// Функция открытия полноэкранного просмотра
const openBigPicture = (photoData) => {
  // Убираем класс hidden и добавляем модальный класс к body
  //console.log('openBigPicture', photoData);

  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  // Обновляем данные изображения
  bigPictureImage.src = photoData.url;
  bigPictureImage.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;

  // Очистка предыдущих комментариев
  socialComments.innerHTML = '';

  // Создание комментариев
  photoData.comments.forEach((comment) => {
    const commentElement = document.createElement('li');
    commentElement.classList.add('social__comment');

    const avatar = document.createElement('img');
    avatar.classList.add('social__picture');
    avatar.src = comment.avatar;
    avatar.alt = comment.name;
    avatar.width = 35;
    avatar.height = 35;

    const text = document.createElement('p');
    text.classList.add('social__text');
    text.textContent = comment.message;

    commentElement.appendChild(avatar);
    commentElement.appendChild(text);
    socialComments.appendChild(commentElement);
  });

  // Скрытие элементов, связанных с подгрузкой комментариев
  commentCountContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  // Добавление обработчиков событий
  document.addEventListener('keydown', (evt) => {
    //console.log('keydown', evt);
    if (evt.key === 'Escape') {
      bigPictureElement.classList.add('hidden');
      body.classList.remove('modal-open');
    }

  });
  bigPictureCloseButton.addEventListener('click', () => {
    bigPictureElement.classList.add('hidden');
    body.classList.remove('modal-open');
  });

};


export {openBigPicture};
