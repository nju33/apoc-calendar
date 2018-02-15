// @flow
export default (tpl: string, data: object) => {
  if (typeof tpl !== 'string') {
    throw new TypeError(`Expected a string in the first argument, got ${typeof tpl}`);
  }

  if (typeof data !== 'object') {
    throw new TypeError(`Expected an Object/Array in the second argument, got ${typeof data}`);
  }

  const re = /{(.*?)}/g;

  return tpl.replace(re, (_, key) => {
    let ret = data;

    const keys = key.split('.');
    // eslint-disable-next-line
    for (const index in keys) {
      ret = ret ? ret[keys[index]] : '';
    }

    return ret || '';
  });
};
