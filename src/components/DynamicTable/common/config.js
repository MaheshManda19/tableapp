export const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};

const Averages = [];
for (let i = 1; i <= 4; i++) {
  const data = [
    [85, 92, 78, 89],
    [90, 88, 76, 94],
    [78, 85, 90, 87],
    [92, 89, 76, 95],
    [87, 94, 85, 90]
  ][i - 1]; 
  Averages.push(calculateAverage(data).toFixed(2));
}
export const tableConfig = {
  table: [
    {
      type: "head",
      value: ["Student Name", "Subject 1", "Subject 2", "Subject 3", "Subject 4"],
      align: "left",
    },
    {
      type: "body",
      value: ["Student 1", 85, 92, 78, 89],
      align: "left",
    },
    {
      type: "body",
      value: ["Student 2", 90, 88, 76, 94],
      align: "left",
    },
    {
      type: "body",
      value: ["Student 3", 78, 85, 90, 87],
      align: "left",
    },
    {
      type: "body",
      value: ["Student 4", 92, 89, 76, 95],
      align: "left",
    },
    {
      type: "body",
      value: ["Student 5", 87, 94, 85, 90],
      align: "left",
    },
    {
      type: "foot",
      value: ["Averages", ...Averages],
      align: "left",
    },
  ],
};
