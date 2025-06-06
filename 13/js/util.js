//модуль с вспомогательными функциями
function idGenerator() {
  let id = 0;
  return function getNewId() {
    id++;
    return id;
  };
}


function getRandom(range) {
  // Генерирует число от мин до макс включительно
  const min = range[0];
  const max = range[1];
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export {idGenerator, getRandom};
