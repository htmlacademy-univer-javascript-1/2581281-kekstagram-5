//модуль, который создаёт данные
// По сути это должен был быть файл constants.js
const TOTAL_OBJECTS = 25;
const DESCRIPTIONS_TEMPLATES = ['ОПЕСАНИЭ', 'КРУТО ОТДиХаю', 'Я на море', 'KappaPride', 'Я в этой жизни настолько приисполнился, что уже буто...', 'ВРоде все работает'];
const DESCRIPTIONS_TEMPLATES_RANGE = [0, DESCRIPTIONS_TEMPLATES.length - 1];
const LIKES_RANGE = [15, 200];
const COMMENTS_RANGE = [0, 30];
const AVATARS_RANGE = [1, 6];
const MESSAGES_TEMPLATES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'

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
// Объединяем всё в один объект
export {
  TOTAL_OBJECTS,
  DESCRIPTIONS_TEMPLATES,
  DESCRIPTIONS_TEMPLATES_RANGE,
  LIKES_RANGE,
  COMMENTS_RANGE,
  AVATARS_RANGE,
  MESSAGES_TEMPLATES,
  MESSAGES_TEMPLATES_RANGE,
  NAMES_TEMPLATES,
  NAMES_TEMPLATES_RANGE
};
