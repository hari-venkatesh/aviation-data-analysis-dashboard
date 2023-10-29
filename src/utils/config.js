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
  airbusA380: "Airbus",
  airbusA340: "Airbus",
  airbusA318: "Airbus",
  boeing767: "Boeing",
  boeing727: "Boeing",
  boeing537: "Boeing",
  douglasDC8: "Douglas",
  douglasDC3: "Douglas",
  lockheedL1011TriStar: "Lockheed",
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
    label: "Arraival",
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
        id: "airbusA380",
        label: "Airbus A380",
      },
      {
        id: "airbusA340",
        label: "Airbus A340",
      },
      {
        id: "airbusA318",
        label: "Airbus A318",
      },
      {
        id: "boeing767",
        label: "Boeing 767",
      },      
      {
        id: "boeing727",
        label: "Boeing 727",
      },
      {
        id: "boeing537",
        label: "Boeing 537",
      },
      {
        id: "douglasDC8",
        label: "Douglas DC-8",
      },
      {
        id: "douglasDC3",
        label: "Douglas DC-3",
      },
      {
        id: "lockheedL1011TriStar",
        label: "Lockheed L-1011 TriStar",
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
