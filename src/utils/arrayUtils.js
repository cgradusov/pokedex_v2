/* eslint-disable import/prefer-default-export */
export const makeChunks = (arr, itemsPerChunk) => (
  arr.reduce((acc, el, index) => {
    if (index % itemsPerChunk === 0) {
      acc.push([]);
    }
    const lastChunkIndex = acc.length - 1;
    acc[lastChunkIndex].push(el);
    return acc;
  }, []));
