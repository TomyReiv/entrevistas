
function findCommonPrefix(strings) {
    if (strings.length === 0) {
      return '';
    }
  
    let prefix = strings[0];
  
    for (let i = 1; i < strings.length && i <= 200; i++) {
      while (!strings[i].startsWith(prefix)) {
        prefix = prefix.substring(0, prefix.length - 1);
      }
    }
  
    return prefix;
  }

  const strings = ['mata', 'matorral', 'matata'];
  const prefijo = findCommonPrefix(strings);
  console.log(prefijo);