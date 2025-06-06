import {
  DESCRIPTIONS_TEMPLATES,
  DESCRIPTIONS_TEMPLATES_RANGE,
  LIKES_RANGE,
  COMMENTS_RANGE,
} from './data.js';
//console.log('____');
import {idGenerator, getRandom} from './util.js';
import {createComment} from './create-Comment.js';

const ojectsIdGenerator = idGenerator();
const jpgIdGenerator = idGenerator();

export const createObjects = function () {
  return {
    id: ojectsIdGenerator(),
    //число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
    url: `photos/${jpgIdGenerator()}.jpg`, // ВМЕСТО this.id можно придумать более случайную уникальную привязку.
    //строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
    //Адреса картинок не должны повторяться
    description: DESCRIPTIONS_TEMPLATES[getRandom(DESCRIPTIONS_TEMPLATES_RANGE)],
    //строка — описание фотографии. Описание придумайте самостоятельно.
    likes: getRandom(LIKES_RANGE),
    //число — количество лайков, поставленных фотографии. Случайное число от 15 до 200
    comments: Array.from({length: getRandom(COMMENTS_RANGE)}, createComment)
    //массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
    //Количество комментариев к каждой фотографии — случайное число от 0 до 30.
    //Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

  };
};
