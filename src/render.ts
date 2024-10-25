const render = (size: number) => {
  const sizeAtr = size > 0 ? ` size="${size + 1}"` : '';
  return `<hr${sizeAtr}>`;
};

/* Загуглил: StringBuffer легаси, лучше использовать JS join/concat, награмождение append
   Улучшено: при помощи тернарника и `` можно сразу вернуть необходимую строку
 */