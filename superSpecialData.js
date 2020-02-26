const superSpecialData = {
    specialPublicData1: 'foo',
    specialPublicData2: 'bar',
    specialPrivateData1: 'baz',
    specialPrivateData2: 'quux'
  };
    
  module.exports = new Proxy(
    superSpecialData,
    {
      get(target, prop) {
        if (typeof prop === 'string' && !prop.startsWith('specialPublicData')) {
          return 'sorry, cannot access private property';
        }
  
        return target[prop];
      },
      set(target, prop, value) {
        if (typeof prop === 'string' && !prop.startsWith('specialPublicData')) {
          throw new Error('sorry, can only set public properties');
        }

        target[prop] = value;
      }
    }
  );