import {
  AVATARS_RANGE,
  MESSAGES_TEMPLATES,
  MESSAGES_TEMPLATES_RANGE,
  NAMES_TEMPLATES,
  NAMES_TEMPLATES_RANGE
} from './data.js';
import {idGenerator, getRandom} from './util.js';

const commentIdGenerator = idGenerator();
export const createComment = function(){
  return {
    id: commentIdGenerator(),
    avatar: `img/avatar-${getRandom(AVATARS_RANGE)}.svg`,
    message: MESSAGES_TEMPLATES[getRandom(MESSAGES_TEMPLATES_RANGE)],
    name: NAMES_TEMPLATES[getRandom(NAMES_TEMPLATES_RANGE)]
  };
};

