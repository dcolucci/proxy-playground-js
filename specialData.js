const specialData = {
  specialPublicData1: 'foo',
  specialPublicData2: 'bar',
  specialPrivateData1: 'baz',
  specialPrivateData2: 'quux'
};
  
module.exports = new Proxy(
	specialData,
  {
    get(target, prop) {
      if (typeof prop === 'string' && !prop.startsWith('specialPublicData')) {
        return 'sorry, cannot access private property';
      }

			return target[prop];
    }
	}
);