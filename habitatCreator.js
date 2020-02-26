const landAnimals = [
  'tiger',
  'fox',
  'magpie'
];

const acquaticAnimals = [
  'seahorse',
  'clam',
  'lobster'
];

const landEnvironments = [
  'tundra',
  'plain',
  'forest'
];

const acquaticEnvironments = [
  'lake',
  'estuary',
  'ocean'
];

module.exports = new Proxy(
  {},
  {
    get(target, prop) {
      if (prop.startsWith('put')) {
        const matches = prop.match(/^put(.+)In(.+)$/);
        if (matches) {
          const animal = matches[1].toLowerCase();
          const environment = matches[2].toLowerCase();

          if (!landAnimals.concat(acquaticAnimals).includes(animal)) {
            return () => `sorry, I don\'t recognize the animal "${animal}"`;
          }
          if (!landEnvironments.concat(acquaticEnvironments).includes(environment)) {
            return () => `sorry, I don\'t recognize the environment "${environment}"`;
          }

          if (landAnimals.includes(animal) && acquaticEnvironments.includes(environment) ||
              acquaticAnimals.includes(animal) && landEnvironments.includes(environment)) {
            return () => `sorry, a ${animal} cannot survive in a ${environment}!`;
          }

          return () => {
            return `habitat created: ${animal} in a(n) ${environment}!`;
          };
        }
      }
    }
  }
);