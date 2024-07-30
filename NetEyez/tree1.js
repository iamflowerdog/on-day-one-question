let data = {
    name: '192.168.1.1; EXE_Source; US-CERT; Information Leak ',
    itemStyle: {
      color: '#fd3995'
    },
    children: [
      {
        name: 'HTTP: 200; URI: /elasticsearch/o*/_search;',
        symbolSize: 2,
        children: [
          {
            name: '192.168.1.8; Information Leak',
            symbol: 'rect',
            symbolSize: symbolSize,
            itemStyle: {
              color: '#ffc241'
            },
            children: [
              {
                name: 'HTTP: 200; URI: /elasticsearch/o*/_search;',
                symbolSize: 2,
                children: [
                  {
                    name: '192.168.1.100; Information Leak',
                    symbolSize: symbolSize,
                    symbol: 'rect',
                    itemStyle: {
                      color: '#ffc241'
                    }
                  },
                ]
              },
              {
                name: 'HTTP: 200; URI: /elasticsearch/o*/_search;',
                symbolSize: 2,
                children: [
                  {
                    name: '192.168.1.101; Information Leak',
                    symbolSize: symbolSize,
                    symbol: 'rect',
                    itemStyle: {
                      color: '#ffc241'
                    }
                  },
                ]
              },
              {
                name: 'HTTP:200; URI: /elasticsearch/o*/_search;',
                symbolSize: 2,
                children: [
                  {
                    name: '192.168.1.102(Information Leak )',
                    symbol: 'rect',
                    symbolSize: symbolSize,
                    itemStyle: {
                      color: '#ffc241'
                    }
                  },
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'DNS, query:aspmx.l.google.com',
        symbolSize: 2,
        children: [
          {
            name: '192.168.2.64(US-CERT)',
            symbol: 'rect',
            symbolSize: symbolSize,
            itemStyle: {
              color: '#1dc9b7'
            },
            children: [
              {
                name: 'DNS, query:aspmx.l.google.com',
                symbolSize: 2,
                children: [
                  {
                    name: '192.168.2.34(US-CERT)',
                    symbolSize: symbolSize,
                    symbol: 'rect',
                    itemStyle: {
                      color: '#1dc9b7'
                    }
                  }
                ]
              },
              {
                name: 'DNS, query:aspmx.l.google.com',
                symbolSize: 2,
                children: [
                  {
                    name: '192.168.2.35(US-CERT)',
                    symbolSize: symbolSize,
                    symbol: 'rect',
                    itemStyle: {
                      color: '#1dc9b7'
                    }
                  }
                ]
              },
            ]
          }
        ]
      },
      {
        name: 'HTTPS:200; Server Name: iecvlist.microsoft.com/secp',
        symbolSize: 2,
        children: [
          {
            name: '117.18.232.200; EXE_Source',
            symbol: 'diamond',
            symbolSize: 25,
            itemStyle: {
              color: '#e83e8c'
            }
          },
          {
            name: '117.18.232.201; EXE_Source',
            symbol: 'diamond',
            symbolSize: 25,
            itemStyle: {
              color: '#e83e8c'
            }
          }
        ]

      }
    ]
  };