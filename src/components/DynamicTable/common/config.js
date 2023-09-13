const calculateAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum / numbers.length;
};

export const tableConfig = {
  table: [
    {
      type: "head",
      value: ["Student Name", "Subject 1", "Subject 2", "Subject 3","Subject 4"],
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
      value: ["Student 5", 90 , 94, 85, 90,],
      align: "left",
    },
    
    {
      type:'foot',
      value:[] || footerRow,
      align:'left'

    }
  ],

};

// Extract the subject data for calculating averages
const subjectData = tableConfig.table
  .filter((item) => item.type === "body")
  .map((item) => item.value.slice(1));

// Calculate averages for each subject
const Averages = subjectData[0].map((_, columnIndex) =>
  calculateAverage(subjectData.map((row) => row[columnIndex])).toFixed(2)
);

// Update the footer row in tableConfig with the calculated averages
const footerRow = tableConfig.table.find((item) => item.type === "foot");
footerRow.value = ["Averages", ...Averages];
