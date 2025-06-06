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
const showNextCommentsButton = bigPictureElement.querySelector('.social__comments-loader');

const body = document.querySelector('body');

let currentPhotoData = null;
let displayedCommentsCount = 0;
const COMMENTS_PER_PORTION = 5;

// Удаление класса hidden у элементов
commentCountContainer.classList.remove('hidden');
commentsLoader.classList.remove('hidden');

// Функция отображения следующих комментариев
const showNextComments = () => {
  const comments = currentPhotoData.comments;
  const remaining = comments.length - displayedCommentsCount;
  const portionSize = Math.min(COMMENTS_PER_PORTION, remaining);

  for (let i = 0; i < portionSize; i++) {
    const comment = comments[displayedCommentsCount];
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

    displayedCommentsCount++;
  }

  // Обновляем счётчик
  commentCountContainer.textContent = `${displayedCommentsCount} из ${comments.length} комментариев`;

  // Скрываем кнопку, если комментарии закончились
  if (displayedCommentsCount >= comments.length) {
    commentsLoader.classList.add('hidden');
  }
};

// Функция для очистки состояния
const resetCommentLoader = () => {
  displayedCommentsCount = 0;
  socialComments.innerHTML = '';
  commentsLoader.classList.remove('hidden');
  commentCountContainer.textContent = '';
};

// Обработчик закрытия окна
const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
  body.classList.remove('modal-open');
  resetCommentLoader();
  removeEventListeners();
};

// Удаление обработчиков событий
function removeEventListeners() {
  document.removeEventListener('keydown', onEscKeydown);
  bigPictureCloseButton.removeEventListener('click', closeBigPicture);
  showNextCommentsButton.removeEventListener('click', showNextComments);
}

// Добавление обработчиков событий
const addEventListeners = () => {
  document.addEventListener('keydown', onEscKeydown);
  bigPictureCloseButton.addEventListener('click', closeBigPicture);
  showNextCommentsButton.addEventListener('click', showNextComments);
};

// Обработчик нажатия Esc
function onEscKeydown(evt) {
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

// Функция открытия полноэкранного просмотра
const openBigPicture = (photoData) => {
  // Удаляем старые обработчики
  removeEventListeners();

  // Устанавливаем новые данные
  currentPhotoData = photoData;

  // Сбрасываем состояние
  resetCommentLoader();

  // Показываем окно
  bigPictureElement.classList.remove('hidden');
  body.classList.add('modal-open');

  // Обновляем данные изображения
  bigPictureImage.src = photoData.url;
  bigPictureImage.alt = photoData.description;
  likesCount.textContent = photoData.likes;
  commentsCount.textContent = photoData.comments.length;
  socialCaption.textContent = photoData.description;

  // Загружаем первую порцию комментариев
  showNextComments();

  // Добавляем обработчики событий
  addEventListeners();
};

export {openBigPicture};
