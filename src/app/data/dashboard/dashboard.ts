
import { primaryColor } from "../common";
import {
  DeviceList,
  Kpis,
  PendingRequest,
  ProjectConfig,
  ShopkeeperOverview,
  SystemMetric,
} from "./dashboard.type";

export const kpis: Kpis[] = [
  {
    id: 1,
    title: "Total Registered Customers",
    value: 356,
    icon: "analytics-user",
    color: "primary",
  },
  {
    id: 2,
    title: "New Customers This Month",
    value: 100,
    icon: "hire-candidate",
    color: "secondary",
  },
  {
    id: 3,
    title: "Total EMI Amount Collected",
    value: 562210,
    icon: "gross-salary",
    color: "warning",
  },
  {
    id: 4,
    title: "New Shopkeepers This Month",
    value: 70,
    icon: "new-employee",
    color: "success",
  },
];

export const applicationOverview: any = {
  chart: {
    series: [
      {
        type: "rangeArea",
        name: "Hired",

        data: [
          {
            x: "Jan",
            y: [5, 12],
          },
          {
            x: "Feb",
            y: [8, 13],
          },
          {
            x: "Mar",
            y: [6, 18],
          },
          {
            x: "Apr",
            y: [8, 16],
          },
          {
            x: "May",
            y: [16, 27],
          },
          {
            x: "Jun",
            y: [0, 11],
          },
          {
            x: "Jul",
            y: [11, 15],
          },
          {
            x: "Aug",
            y: [6, 10],
          },
        ],
      },

      {
        type: "rangeArea",
        name: "Applications",
        data: [
          {
            x: "Jan",
            y: [21, 24],
          },
          {
            x: "Feb",
            y: [30, 37],
          },
          {
            x: "Mar",
            y: [28, 35],
          },
          {
            x: "Apr",
            y: [24, 30],
          },
          {
            x: "May",
            y: [37, 43],
          },
          {
            x: "Jun",
            y: [39, 49],
          },
          {
            x: "Jul",
            y: [31, 33],
          },
          {
            x: "Aug",
            y: [13, 19],
          },
        ],
      },

      {
        type: "line",
        name: "Hired",
        data: [
          {
            x: "Jan",
            y: 8,
          },
          {
            x: "Feb",
            y: 11,
          },
          {
            x: "Mar",
            y: 12,
          },
          {
            x: "Apr",
            y: 13,
          },
          {
            x: "May",
            y: 20,
          },
          {
            x: "Jun",
            y: 5,
          },
          {
            x: "Jul",
            y: 13,
          },
          {
            x: "Aug",
            y: 8,
          },
          {
            x: "Sep",
            y: 12,
          },
          {
            x: "Oct",
            y: 14,
          },
        ],
      },
      {
        type: "line",
        name: "Applications",
        data: [
          {
            x: "Jan",
            y: 22,
          },
          {
            x: "Feb",
            y: 34,
          },
          {
            x: "Mar",
            y: 31,
          },
          {
            x: "Apr",
            y: 28,
          },
          {
            x: "May",
            y: 40,
          },
          {
            x: "Jun",
            y: 44,
          },
          {
            x: "Jul",
            y: 32,
          },
          {
            x: "Aug",
            y: 16,
          },
          {
            x: "Sep",
            y: 13,
          },
          {
            x: "Oct",
            y: 8,
          },
        ],
      },
    ],
    chart: {
      height: 170,
      type: "rangeArea",
      animations: {
        speed: 500,
      },
      toolbar: {
        show: false,
      },
    },
    colors: ["#ffb829", primaryColor, "#ffb829", primaryColor],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: [0.24, 0.24, 1, 1],
    },
    forecastDataPoints: {
      count: 2,
    },
    stroke: {
      curve: "straight",
      width: [0, 0, 2, 2],
    },
    yaxis: {
      min: 0,
      max: 50,
      tickAmount: 5,
      labels: {
        style: {
          colors: "#52526C",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
      labels: {
        style: {
          colors: "#52526C",
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          fontWeight: 400,
        },
      },
    },
    legend: {
      show: false,
    },
    markers: {
      hover: {
        sizeOffset: 5,
      },
    },
    responsive: [
      {
        breakpoint: 1560,
        options: {
          xaxis: {
            tickAmount: 5,
            tickPlacement: "between",
          },
        },
      },
      {
        breakpoint: 793,
        options: {
          chart: {
            height: 185,
          },
        },
      },
    ],
  },
  chart_details: [
    { title: "Application", color: "primary" },
    { title: "Hired", color: "warning" },
  ],
};

export const deviceLists: DeviceList[] = [
  {
    id: 1,
    name: "Wade Warren",
    model: "Galaxy A12",
    brand: "Samsung",
    date_of_sale: "2025-01-15",
    due_date: "2025-06-15",
    status: "Locked",
    total_price: 500,
    price_paid: 200,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-11/user/12.jpg",
  },
  {
    id: 2,
    name: "Michael Mit",
    model: "Redmi Note 12",
    brand: "Xiaomi",
    date_of_sale: "2025-02-10",
    due_date: "2025-07-10",
    status: "Unlocked",
    total_price: 400,
    price_paid: 400,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard/user/6.jpg",
  },
  {
    id: 3,
    name: "Jenny Wilson",
    model: "iPhone 13",
    brand: "Apple",
    date_of_sale: "2025-03-01",
    due_date: "2025-08-01",
    status: "Locked",
    total_price: 1000,
    price_paid: 450,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-11/user/8.jpg",
  },
  {
    id: 4,
    name: "Guy Hawkins",
    model: "Pixel 6",
    brand: "Google",
    date_of_sale: "2025-01-20",
    due_date: "2025-06-20",
    status: "Locked",
    total_price: 600,
    price_paid: 300,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-11/user/3.jpg",
  },
  {
    id: 5,
    name: "Esther Howard",
    model: "Poco X5",
    brand: "Xiaomi",
    date_of_sale: "2025-02-28",
    due_date: "2025-07-28",
    status: "Locked",
    total_price: 450,
    price_paid: 150,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-9/user/2.png",
  },
  {
    id: 6,
    name: "Jacob Jones",
    model: "OnePlus Nord",
    brand: "OnePlus",
    date_of_sale: "2025-04-05",
    due_date: "2025-09-05",
    status: "Locked",
    total_price: 550,
    price_paid: 220,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-9/user/5.png",
  },
  {
    id: 7,
    name: "Arlene McCoy",
    model: "Galaxy A23",
    brand: "Samsung",
    date_of_sale: "2025-03-12",
    due_date: "2025-08-12",
    status: "Locked",
    total_price: 480,
    price_paid: 180,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-9/user/3.png",
  },
  {
    id: 8,
    name: "Robert Fox",
    model: "Infinix Zero 5G",
    brand: "Infinix",
    date_of_sale: "2025-01-10",
    due_date: "2025-06-10",
    status: "Unlocked",
    total_price: 380,
    price_paid: 380,
    imei: `${Date.now()}`,
    image: "assets/images/dashboard-9/user/1.png",
  },
];

export const shopkeeperOverview: ShopkeeperOverview[] = [
  {
    id: 1,
    firstName: "David",
    lastName: "Jones",
    shopName: "Web Design Studio",
    shopLocationCity: "New York",
    shopLocationState: "NY",
    balance: 10,
    status: "Pending",
  },
  {
    id: 2,
    firstName: "Joseph",
    lastName: "Miller",
    shopName: "UX/UI Design Firm",
    shopLocationCity: "Los Angeles",
    shopLocationState: "CA",
    balance: 10,
    status: "Verified",
  },
  {
    id: 3,
    firstName: "Daniel",
    lastName: "Moore",
    shopName: "Python Dev Hub",
    shopLocationCity: "Chicago",
    shopLocationState: "IL",
    balance: 10,
    status: "Rejected",
  },
  {
    id: 4,
    firstName: "Ava",
    lastName: "Garcia",
    shopName: "JS Development Co.",
    shopLocationCity: "San Francisco",
    shopLocationState: "CA",
    balance: 10,
    status: "Pending",
  },
  {
    id: 5,
    firstName: "Amelia",
    lastName: "Lee",
    shopName: "Next Gen Developers",
    shopLocationCity: "Miami",
    shopLocationState: "FL",
    balance: 10,
    status: "Pending",
  },
  {
    id: 6,
    firstName: "Harper",
    lastName: "Scott",
    shopName: "Marketing Agency",
    shopLocationCity: "Austin",
    shopLocationState: "TX",
    balance: 10,
    status: "Pending",
  },
  {
    id: 7,
    firstName: "Jack",
    lastName: "Smith",
    shopName: "ML Development Studio",
    shopLocationCity: "Boston",
    shopLocationState: "MA",
    balance: 10,
    status: "Pending",
  },
  {
    id: 8,
    firstName: "Cole",
    lastName: "Brown",
    shopName: "AI Development Lab",
    shopLocationCity: "Seattle",
    shopLocationState: "WA",
    balance: 10,
    status: "Verified",
  },
];

export const systemMetrics: SystemMetric[] = [
  // Memory
  {
    title: "Memory Usage",
    icon: "icofont-brain-alt",
    description: "Used vs Total RAM",
    value: "3.2 GB / 8 GB (40%)",
    color_class: "success",
  },
  {
    title: "Swap Usage",
    icon: "icofont-refresh",
    description: "Used vs Total Swap",
    value: "512 MB / 2 GB (25%)",
    color_class: "warning",
  },

  // Disk
  {
    title: "Disk Usage (/)",
    icon: "icofont-hard-disk",
    description: "Root partition usage",
    value: "30 GB / 100 GB (30%)",
    color_class: "info",
  },
  {
    title: "Disk I/O",
    icon: "icofont-exchange",
    description: "Read/Write per second",
    value: "45 MB/s / 25 MB/s",
    color_class: "primary",
  },

  // CPU
  {
    title: "CPU Load",
    icon: "icofont-robot-face",
    description: "1m / 5m / 15m load average",
    value: "0.45 / 0.60 / 0.70",
    color_class: "warning",
  },
  // Network
  {
    title: "Network Traffic",
    icon: "icofont-wifi",
    description: "Upload / Download Speed",
    value: "120 KB/s / 300 KB/s",
    color_class: "primary",
  },

  // Process
  {
    title: "Running Processes",
    icon: "icofont-tasks-alt",
    description: "Total running processes",
    value: "102",
    color_class: "secondary",
  },
  {
    title: "Top CPU Process",
    icon: "icofont-bolt",
    description: "Process using most CPU",
    value: "dotnet (38%)",
    color_class: "danger",
  },
  {
    title: "Top Memory Process",
    icon: "icofont-battery-empty",
    description: "Process using most RAM",
    value: "postgres (24%)",
    color_class: "danger",
  },

  // Application Layer
  {
    title: "API Status",
    icon: "icofont-server",
    description: "ASP.NET WebAPI health check",
    value: "✅ Running",
    color_class: "success",
  },
  {
    title: "Database Status",
    icon: "icofont-database",
    description: "PostgreSQL connection",
    value: "✅ Connected",
    color_class: "success",
  },
  {
    title: "SMS Gateway",
    icon: "icofont-ui-message",
    description: "SMS API health check",
    value: "✅ OK",
    color_class: "success",
  },

  // Security / SSL
  {
    title: "SSL Certificate",
    icon: "icofont-lock",
    description: "Valid until",
    value: "2025-12-31",
    color_class: "info",
  },
  {
    title: "Failed SSH Attempts",
    icon: "icofont-warning-alt",
    description: "Last 24 hours",
    value: "5 attempts",
    color_class: "danger",
  },

  // Uptime
  {
    title: "System Uptime",
    icon: "icofont-clock-time",
    description: "Time since last reboot",
    value: "12 days, 4 hours",
    color_class: "success",
  },

  // Logs
  {
    title: "Recent API Errors",
    icon: "icofont-bug",
    description: "Last 1 hour",
    value: "2 critical errors",
    color_class: "danger",
  },
];
export const pendingRequests: PendingRequest[] = [
  {
    id: 1,
    name: "Alison Carol",
    reason: "Family Function",
    type: "withdrawal",
    image: "assets/images/dashboard/user/6.jpg",
  },
  {
    id: 2,
    name: "Miranda Bailey",
    reason: "Personal Leave",
    type: "account_approval",
    image: "assets/images/dashboard-11/user/3.jpg",
  },
  {
    id: 3,
    name: "Kathryn Roe",
    reason: "Sick Leave",
    type: "withdrawal",
    image: "assets/images/dashboard/user/10.jpg",
  },
  {
    id: 4,
    name: "Andrew Baker",
    reason: "Personal Leave",
    type: "account_approval",
    image: "assets/images/dashboard/user/9.jpg",
  },
  {
    id: 5,
    name: "Bob James",
    reason: "Sick Leave",
    type: "withdrawal",
    image: "assets/images/dashboard-11/user/9.jpg",
  },
  {
    id: 6,
    name: "Thomas Tim",
    reason: "Out of Town",
    type: "withdrawal",
    image: "assets/images/dashboard-11/user/12.jpg",
  },
  {
    id: 7,
    name: "Muriel Bing",
    reason: "Out of Town",
    type: "account_approval",
    image: "assets/images/dashboard-11/user/5.jpg",
  },
  {
    id: 8,
    name: "Russell Rose",
    reason: "Sick Leave",
    type: "withdrawal",
    image: "assets/images/dashboard-11/user/11.jpg",
  },
];
export const projectConfigs: ProjectConfig[] = [
  {
    id: 1,
    name: "Max Users",
    value: "500",
    description: "Maximum number of users allowed in the system",
    type: "number",
  },
  {
    id: 2,
    name: "Theme",
    value: "Dark",
    description: "UI theme applied globally across the application",
    type: "text",
  },
  {
    id: 3,
    name: "Timezone",
    value: "UTC+0",
    description: "Default timezone for all date and time operations",
    type: "text",
  },
  {
    id: 4,
    name: "Default Language",
    value: "English",
    description: "Initial language used for localization",
    type: "text",
  },
];
