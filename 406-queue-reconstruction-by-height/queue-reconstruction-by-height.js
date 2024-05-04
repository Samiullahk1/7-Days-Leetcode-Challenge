const reconstructQueue = (people) => {
  const compare = ([h1, k1], [h2, k2]) => {
    if (h1 !== h2) return h2 - h1;
    else return k1 - k2;
  };

  people.sort(compare);

  const reconstructedQueue = [];

  for (const person of people) {
    reconstructedQueue.splice(person[1], 0, person);
  }

  return reconstructedQueue;
};
