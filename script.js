function mergeCraftDates(emilyCraftDates, oliverCraftDates) {
  const mergedDates = [];
  let i = 0;
  let j = 0;

  while (i < emilyCraftDates.length && j < oliverCraftDates.length) {
    if (emilyCraftDates[i] <= oliverCraftDates[j]) {
      mergedDates.push(emilyCraftDates[i]);
      i++;
    } else {
      mergedDates.push(oliverCraftDates[j]);
      j++;
    }
  }

  while (i < emilyCraftDates.length) {
    mergedDates.push(emilyCraftDates[i]);
    i++;
  }

  while (j < oliverCraftDates.length) {
    mergedDates.push(oliverCraftDates[j]);
    j++;
  }

  return mergedDates;
}

const emilyCraftDates = [3, 7, 12, 20];
const oliverCraftDates = [1, 5, 8, 18, 25];
const mergedDates = mergeCraftDates(emilyCraftDates, oliverCraftDates);

console.log(mergedDates);