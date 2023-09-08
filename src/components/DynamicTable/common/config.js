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
      value: "Student Name",
      align: "left",
    },
    {
      type: "head",
      value: "Subject 1",
      align: "left",
    },
    {
      type: "head",
      value: "Subject 2",
      align: "left",
    },
    {
      type: "head",
      value: "Subject 3",
      align: "left",
    },
    {
      type: "head",
      value: "Subject 4",
      align: "left",
    },
    {
      type: "body",
      value: "Student 1",
      align: "left",
      data: [85, 92, 78, 89],
    },
    {
      type: "body",
      value: "Student 2",
      align: "left",
      data: [90, 88, 76, 94],
    },
    {
      type: "body",
      value: "Student 3",
      align: "left",
      data: [78, 85, 90, 87],
    },
    {
      type: "body",
      value: "Student 4",
      align: "left",
      data: [92, 89, 76, 95],
    },
    {
      type: "body",
      value: "Student 5",
      align: "left",
      data: [87, 94, 85, 90],
    },
    {
      type: "foot",
      value: "Averages",
      align: "left",
      data: Averages, 
    },
  ],
};
