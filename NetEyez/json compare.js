export let EventDistributionReport = {
    hostBase: true,
    name: `EventDistribution`,
    widgetName: 'Event Distribution',
    id: 2,
    order: 3,
    interval: 5,
    col: 'col-xl-3',
    width: 'w-25',
    height: {
      dashboard: '400px',
      report: '250px',
    },
    donutHeight: {
      dashboard: '400px',
      report: '250px',
    },
    dashboard: {
      legend: {
        orient: 'vertical',
        right: '5%',
        top: '3%',
        bottom: '5%',
        formatter: function (params) {
          const arr = params.split(" ");
          let len = 0;
          let str = "";
          const lineNum = 25;
          for (let i = 0; i < arr.length; i++) {
            len += arr[i].length;
            if (len < lineNum) {
              str += arr[i] + ' ';
            } else {
              str += "\n";
              str += arr[i] + ' ';
              len = arr[i].length;
            }
          }
          return str;
        }
      },
      center: ['30%', '50%'],
      radius: ["50%", '65%'],
    },
    report: {
      legend: {
        top: 'bottom',
        orient: 'horizontal',
      },
      center: ['50%', '30%'],
      radius: ['30%', '50%'],
    },
    kpi: 'percentage',
    componentName: 'smart-c3-donut',
    chartType: 'donut',
    title: 'TopN Event Distribution',
    discription: '',
    legendPosition: 'right',
    showTable: true,
    url: '/event/snort/top/5',
    tableHeader: [
      {
        title: 'Application',
        key: 'key'
      },
      {
        title: 'Packets',
        key: 'totalPackets'
      },
      {
        title: 'Bytes',
        key: 'totalBytes'
      }
    ],
    params: {
      agentName: "",
      adapterName: "",
      startTime: "",
      endTime: "",
      "tag": "IDS",
      size: null,
      from: null,
      channelIndex: [],
      top: 20
    },
    drillDown: {
      type: "popover",
      popList: [
        '/event'
      ]
    },
    showDetail: true,
    showExpert: true
  }