export const xAxis = [{ scaleType: "band", dataKey: "month" }];

export const series = [
  {
    dataKey: "dailyLogin",
    label: "Daily Logins",
    valueFormatter: (value) => `${value} logins`,
  },
  {
    dataKey: "profileView",
    label: "Profile Views",
    valueFormatter: (value) => `${value} views`,
  },
];

export const chartSettings = {
  yAxis: [{ label: "Logins & Views" }],
};

export const dataset = [
  {
    dailyLogin: 59,
    profileView: 57,
    month: "Jan",
  },
  {
    dailyLogin: 50,
    profileView: 52,
    month: "Feb",
  },
  {
    dailyLogin: 47,
    profileView: 53,
    month: "Mar",
  },
  {
    dailyLogin: 54,
    profileView: 56,
    month: "Apr",
  },
  {
    dailyLogin: 57,
    profileView: 69,
    month: "May",
  },
  {
    dailyLogin: 60,
    profileView: 63,
    month: "June",
  },
  {
    dailyLogin: 59,
    profileView: 60,
    month: "July",
  },
  {
    dailyLogin: 65,
    profileView: 60,
    month: "Aug",
  },
  {
    dailyLogin: 51,
    profileView: 51,
    month: "Sept",
  },
  {
    dailyLogin: 60,
    profileView: 65,
    month: "Oct",
  },
  {
    dailyLogin: 67,
    profileView: 64,
    month: "Nov",
  },
  {
    dailyLogin: 61,
    profileView: 70,
    month: "Dec",
  },
];

export const activities = [
  { dateTime: "Sept 28, 2019 | 10:50 PM", status: "Logged in" },
  { dateTime: "Sept 25, 2019 | 10:30 AM", status: "Logged in" },
  { dateTime: "Sept 14, 2019 | 1:30 PM", status: "Updated Profile" },
  { dateTime: "Sept 6, 2019 | 2:30 PM", status: "Logged out" },
];

