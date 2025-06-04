//console.log('Hi');

const TOTAL_OBJECTS = 25;
const DESCRIPTIONS_TEMPLATES = ['ОПЕСАНИЭ','КРУТО ОТДиХаю', 'Я на море', 'KappaPride', 'Я в этой жизни настолько приисполнился, что уже буто...','ВРоде все работает'];
const DESCRIPTIONS_TEMPLATES_RANGE = [0,DESCRIPTIONS_TEMPLATES.length - 1];
const LIKES_RANGE = [15, 200];
const COMMENTS_RANGE = [0, 30];
const AVATARS_RANGE = [1, 6];
const MESSAGES_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

];
const MESSAGES_TEMPLATES_RANGE = [0, MESSAGES_TEMPLATES.length - 1];
const NAMES_TEMPLATES = [
  'Геральт',
  'Йеннифер',
  'Цири',
  'Трисс',
  'Ламберт',
  'Эскель',
  'Радовид',
  'Дийкстра',
  'Кровавый Барон',
  'Плотва',
  'Филиппа',
  'Калантэ',
  'Золтан',
  'Керис',
  'Милва',
  'Генриетта',
  'Кагыр',
  'Саския',
  'Лютик',
  'Аваллакх',
  'Талер',
  'Эмгыр Вар Эмрейс',
  'Ненеке',
  'Ивасик',
  'Роше'
];
const NAMES_TEMPLATES_RANGE = [0, NAMES_TEMPLATES.length - 1];
/**
 * В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов.
 * Каждый объект массива — описание фотографии, опубликованной пользователем
 */
function idGenerator(){
  let id = 0;
  return function getNewId(){
    id++;
    return id;
  };
}

const ojectsIdGenerator = idGenerator();
const jpgIdGenerator = idGenerator();

function getRandom(range){
  // Генерирует число от мин до макс включительно
  const min = range[0];
  const max = range[1];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const commentIdGenerator = idGenerator();
const createComment = function(){
  return {
    id: commentIdGenerator(),
    avatar: `img/avatar-${getRandom(AVATARS_RANGE)}.svg`,
    message: MESSAGES_TEMPLATES[getRandom(MESSAGES_TEMPLATES_RANGE)],
    name: NAMES_TEMPLATES[getRandom(NAMES_TEMPLATES_RANGE)]
  };
};

const createObjects = function () {
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
const generatedObjects = Array.from({length:TOTAL_OBJECTS}, createObjects);
generatedObjects.at(0);
//console.log(generatedObjects);


