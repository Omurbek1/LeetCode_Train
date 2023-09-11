async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
 return Promise.all([promise1, promise2])
    .then(([result1, result2]) => result1 + result2)
    .catch((error) => {
      console.error(`Error: ${error}`);
      throw error; // Optional: Rethrow the error if needed
    });
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
