//console.log('Hi');

/**
 * В файле main.js напишите необходимые функции для создания массива из 25 сгенерированных объектов.
 * Каждый объект массива — описание фотографии, опубликованной пользователем
 */

import {TOTAL_OBJECTS} from './data.js';
import {createObjects} from './create-Objects.js';

const generatedObjects = Array.from({length: TOTAL_OBJECTS}, createObjects);
generatedObjects.at(0);
// eslint-disable-next-line no-console
console.log(generatedObjects);


