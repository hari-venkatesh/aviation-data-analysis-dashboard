export const airportFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter Airport name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "noOfAirlines",
    type: "number",
    placeholder: "Enter No of Airlines",
    label: "Airlines",
    componentType: "input",
  },
  {
    id: "noOfAircrafts",
    type: "number",
    placeholder: "Enter No of Aircrafts",
    label: "Aircrafts",
    componentType: "input",
  },
  {
    id: "noOfFlightCancelledByAirport",
    type: "number",
    placeholder: "Enter No of Flights",
    label: "Cancelled by Airports",
    componentType: "input",
  },
  {
    id: "noOfFlightCancelledByAirlines",
    type: "number",
    placeholder: "Enter No of Flights",
    label: "Cancelled by Airlines",
    componentType: "input",
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Month",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "January",
      },
      {
        id: "feb",
        label: "February",
      },
      {
        id: "mar",
        label: "March",
      },
      {
        id: "apr",
        label: "April",
      },
      {
        id: "may",
        label: "May",
      },
      {
        id: "jun",
        label: "June",
      },
      {
        id: "jul",
        label: "July",
      },
      {
        id: "aug",
        label: "August",
      },
      {
        id: "sep",
        label: "September",
      },
      {
        id: "oct",
        label: "October",
      },
      {
        id: "nov",
        label: "November",
      },
      {
        id: "dec",
        label: "December",
      },
    ],
  },
];

export const airportTableHeaders = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "noOfAirlines",
    label: "No Of Airlines",
  },
  {
    id: "noOfAircrafts",
    label: "No Of Aircrafts",
  },
  {
    id: "noOfFlightCancelledByAirport",
    label: "No Of Flight Cancelled",
  },
  {
    id: "month",
    label: "Month",
  },
];

export const monthsMapper = {
  jan: "January",
  feb: "February",
  mar: "March",
  apr: "April",
  may: "May",
  jun: "June",
  jul: "July",
  aug: "August",
  sep: "September",
  oct: "October",
  nov: "November",
  dec: "December",
};

export const aircraftMapper = {
  airbus: "Airbus",
  boeing: "Boeing",
  douglas: "Douglas",
  lockheed: "Lockheed",
};

export const airlinesFormControls = [
  {
    id: "name",
    type: "text",
    placeholder: "Enter Airline Name",
    label: "Name",
    componentType: "input",
  },
  {
    id: "economyClass",
    type: "number",
    placeholder: "Enter No of Passengers",
    label: "Economy Class",
    componentType: "input",
  },
  {
    id: "businessClass",
    type: "number",
    placeholder: "Enter No of Passengers",
    label: "Business Class",
    componentType: "input",
  },
  {
    id: "origin",
    type: "text",
    placeholder: "Enter Airport Name",
    label: "Departure",
    componentType: "input",
  },
  {
    id: "destination",
    type: "text",
    placeholder: "Enter Airport Name",
    label: "Arrival",
    componentType: "input",
  },
  {
    id: "aircraftType",
    type: "",
    placeholder: "",
    label: "Aircraft Type",
    componentType: "select",
    options: [
      {
        id: "airbus",
        label: "Airbus",
      },
      {
        id: "boeing",
        label: "Boeing",
      },
      {
        id: "douglas",
        label: "Douglas",
      },
      {
        id: "lockheed",
        label: "Lockheed",
      },
    ],
  },
  {
    id: "month",
    type: "",
    placeholder: "",
    label: "Month",
    componentType: "select",
    options: [
      {
        id: "jan",
        label: "January",
      },
      {
        id: "feb",
        label: "February",
      },
      {
        id: "mar",
        label: "March",
      },
      {
        id: "apr",
        label: "April",
      },
      {
        id: "may",
        label: "May",
      },
      {
        id: "jun",
        label: "June",
      },
      {
        id: "jul",
        label: "July",
      },
      {
        id: "aug",
        label: "August",
      },
      {
        id: "sep",
        label: "September",
      },
      {
        id: "oct",
        label: "October",
      },
      {
        id: "nov",
        label: "November",
      },
      {
        id: "dec",
        label: "December",
      },
    ],
  },
];

export const airlinesTableHeaders = [
  {
    id: "name",
    label: "Name",
  },
  {
    id: "aircraftType",
    label: "Aircraft Type",
  },
  {
    id: "origin",
    label: "Departure Airport",
  },
  {
    id: "destination",
    label: "Arraival Airport",
  },
  {
    id: "month",
    label: "Month",
  },
];

export const yearlyAnalyticsChartOptions = {
  legend: {
    show: true,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [2, 2],
    curve: "straight",
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 105,
  },
};

export const passengerAnalyticsChartOptions = {
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "bar",
    height: 335,
    stacked: true,
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },

  responsive: [
    {
      breakpoint: 1536,
      options: {
        plotOptions: {
          bar: {
            borderRadius: 0,
            columnWidth: "25%",
          },
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      borderRadius: 0,
      columnWidth: "25%",
      borderRadiusApplication: "end",
      borderRadiusWhenStacked: "last",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "top",
    horizontalAlign: "left",
    fontFamily: "Satoshi",
    fontWeight: 500,
    fontSize: "14px",

    markers: {
      radius: 99,
    },
  },
  fill: {
    opacity: 1,
  },
};

export const aircraftAnalyticsChartOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#10B981", "#375E83", "#259AE6", "#FFA70B"],
  labels: ["Boeing", "Airbus", "Douglas", "Lockheed"],
  legend: {
    show: true,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: true,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};