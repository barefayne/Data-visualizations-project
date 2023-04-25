const url = "http://127.0.0.1:5000/api/v1.0/cases";

// Retrieve all of the data
var api_data = [];
d3.json(url).then(function (data) {
  console.log(data);
  api_data = data;

  // ---------- CARDS ----------
  // total incidents data and plot
  document.getElementById("incidents").textContent = data.length;

  // Retrieve data for card 2 and 3
  let total_victims = 0;
  let total_fatalities = 0;

  data.map((item) => {
    total_victims += item["Total victims"];
    total_fatalities += item["Fatalities"];
  });

  document.getElementById("victims").textContent = total_victims;
  document.getElementById("fatalities").textContent = total_fatalities;

  //  ---------- CHARTS ----------

  // BAR CHART

  // Retrieve data for Top 10 Deadliest Incidents
  // Slice and sort to get top ten in descending order
  let sortedCaseData = data.sort(
    (a, b) => b["Total victims"] - a["Total victims"]);

  let x_axis_case = sortedCaseData.map((item) => item["Case"]).slice(0, 10);
  let y_axis_case = sortedCaseData.map((item) => item["Total victims"]).slice(0, 10);

  // Display bar chart
  var barChartOptions = {
    series: [
      {
        name: "Total victims",
        data: y_axis_case,
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    colors: [
      "#1C4E80",
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },
    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
      
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: x_axis_case,
      fontSize: '18px',
    },
    yaxis: {},
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: false, 
        },
      },
    },
  };

  var barChart = new ApexCharts(document.querySelector("#bar-chart"),barChartOptions);
  barChart.render();

  // PIE CHART
  let place_labels = [
    ...new Set(data.map((item) => item["Place of incident"])),
  ];

  let possible = {
    Airport: 0,
    Military: 0,
    Other: 0,
    Religious: 0,
    School: 0,
    Workplace: 0,
  };

  data.map((item) => {
    possible[item["Place of incident"]] += 1;
  });

  let temp = [...place_labels].map((item) => {
    return possible[item];
  });

  console.log("possible", possible, temp);

  // Display pie chart
  var barChartOptions = {
    series: [...place_labels].map((item) => {
      return possible[item];
    }),
    chart: {
      width: 480,
      height: 350,
      fontSize: '28px',
      type: "donut",
      
    },
    colors: [
      "#CC3C43", 
      "#7E909A", 
      "#1C4E80", 
      "#A5D8DD", 
      "#FFBB00", 
      "#0091D5"
    ],
    labels: place_labels,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 480,
          },
          legend: {
            position: "bottom",
            fontSize: '28px',
          },
        },
      },
    ],
  };
  var barChart = new ApexCharts(document.querySelector("#pie-chart"),barChartOptions);
  barChart.render();

  // GROUP BAR CHART
  // Assgain labels
  let citylabels = data.map((item) => item["City"]);

  // Slice to get top ten 

  let sortedData = data.sort((a, b) => b["Total victims"] - a["Total victims"]);
  let x_axis = sortedData.map((item) => item["City"]).slice(0, 10);
  let y_axis = sortedData.map((item) => item["Total victims"]).slice(0, 10);
  let y_axis2 = sortedData.map((item) => item["Fatalities"]).slice(0, 10);

  console.log(x_axis, y_axis);


  // Display group bar chart
  var groupBarChartOptions = {
    series: [
      {
        name: "Total victims",
        data: y_axis,
      },
      {
        name: "Fatalities",
        data: y_axis2,
      },
    ],
    chart: {
      type: "bar",
      height: 350,
    },
    colors: [
      "#1C4E80",
      "#cc3c43"
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    dataLabels: {
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"],
      },
    },

    stroke: {
      show: true,
      width: 1,
      colors: ["#fff"],
    },
    tooltip: {
      shared: true,
      intersect: false,
    },
    xaxis: {
      categories: x_axis,
    },
    yaxis: {},
    grid: {
      show: true,
      yaxis: {
        lines: {
          show: false, 
        },
      },
    },
  };

  var areaChart = new ApexCharts(document.querySelector("#group-chart"),groupBarChartOptions);
  areaChart.render();
});
