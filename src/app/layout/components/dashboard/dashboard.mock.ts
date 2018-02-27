import { Stock } from "./dashboard.model";

export const LINECHARTDATA: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" },
    { data: [18, 48, 77, 9, 100, 27, 40], label: "Series C" }
];

export const LINECHARTLABELS: Array<any> = ["January", "February", "March", "April", "May", "June", "July"];

export const LINECHARTCOLORS: Array<any> = [
    { // grey
        backgroundColor: "rgba(148,159,177,0.2)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    { // dark grey
        backgroundColor: "rgba(77,83,96,0.2)",
        borderColor: "rgba(77,83,96,1)",
        pointBackgroundColor: "rgba(77,83,96,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(77,83,96,1)"
    },
    { // grey
        backgroundColor: "rgba(148,159,177,0.2)",
        borderColor: "rgba(148,159,177,1)",
        pointBackgroundColor: "rgba(148,159,177,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
];

export const BARCHARTLABELS: string[] = [
    "2006", "2007", "2008", "2009", "2010", "2011", "2012"
];

export const BARCHARTDATA: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: "Series A" },
    { data: [28, 48, 40, 19, 86, 27, 90], label: "Series B" }
];

export const PIECHARTLABELS: string[] = [
    "Moving Stock", "Outbound Stock", "Inbound Stock"
];

export const PIECHARTDATA: number[] = [
    300, 500, 100
];

export const DOUGHNUTCHARTLABELS: string[] = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];

export const DOUGHNUTCHARTDATA: number[] = [350, 450, 100];

export const STOCK_DATA: Stock[] = [
    { "item": "Water Purifier", "openingBalance": 225, "goodsReceived": 75, "openOrder": 75, "dispatched": 50, "closingBalance": 250, "fullfillment": "20%" },
    { "item": "Geyser", "openingBalance": 120, "goodsReceived": 80, "openOrder": 120, "dispatched": 60, "closingBalance": 140, "fullfillment": "30%" },
    { "item": "Kitchen Sink", "openingBalance": 150, "goodsReceived": 50, "openOrder": 125, "dispatched": 40, "closingBalance": 260, "fullfillment": "75%" },
    { "item": "Wash Basins", "openingBalance": 75, "goodsReceived": 25, "openOrder": 55, "dispatched": 75, "closingBalance": 25, "fullfillment": "60%" },
    { "item": "Faucets", "openingBalance": 320, "goodsReceived": 80, "openOrder": 125, "dispatched": 200, "closingBalance": 200, "fullfillment": "80%" },
    { "item": "Showers", "openingBalance": 250, "goodsReceived": 75, "openOrder": 200, "dispatched": 150, "closingBalance": 175, "fullfillment": "50%" }
];

export const DISPLAYEDCOLUMNS = ["item", "openingBalance", "goodsReceived", "openOrder", "dispatched", "closingBalance", "fullfillment"];
