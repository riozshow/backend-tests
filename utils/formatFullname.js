module.exports = (fullName) => {
  if (typeof fullName !== 'string') return 'Error';
  let split = fullName.split(' ');
  if (split.length !== 2) return 'Error';

  if (
    split.some((name) => {
      if (name.length < 1) return true;
      if (new RegExp(/[^a-zA-Z0-9'-]/g).test(name)) return true;
      if (
        name.startsWith("'") ||
        name.startsWith('-') ||
        name.endsWith("'") ||
        name.endsWith('-')
      )
        return true;
    })
  )
    return 'Error';

  split = split
    .map((name) => name[0].toUpperCase() + name.slice(1).toLowerCase())
    .map((name) => {
      ["'", '-'].map((char) => {
        if (name.includes(char)) {
          name = name
            .split(char)
            .map((sub) => sub[0].toUpperCase() + sub.slice(1).toLowerCase())
            .join(char);
        }
      });
      if (name.toLowerCase().startsWith('mc')) {
        const sub = name.toLowerCase().replace('mc', '');
        name = 'Mc' + sub[0].toUpperCase() + sub.slice(1).toLowerCase();
      }
      return name;
    });

  return split.join(' ');
};
