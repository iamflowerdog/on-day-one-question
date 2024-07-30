let data = [
    {
        "sourceClass": "EXE_Source,DDoSTarget,CnC,Proxy,IPCheck,Misc activity,Information Leak,Attempted Information Leak,Misc Attack,Potentially Bad Traffic,Detection of a Network Scan,Access to a potentially vulnerable web application,Executable code was detected,A system call was detected,Web Application Attack",
        "isPrivateIP": true,
        "related": null,
        "score": 81,
        "children": [
            {
                "sourceClass": "EXE_Source",
                "isPrivateIP": false,
                "related": [
                    {
                        "type": "conn",
                        "service": "ssl"
                    },
                    {
                        "type": "https",
                        "servername": "pds-init.ess.apple.com",
                        "statusCode": null
                    }
                ],
                "score": 27,
                "children": null,
                "ip": "23.202.34.137"
            },
            {
                "sourceClass": "DDoSTarget",
                "isPrivateIP": false,
                "related": [
                    {
                        "type": "conn",
                        "service": null
                    }
                ],
                "score": 27,
                "children": null,
                "ip": "223.5.5.5"
            },
            {
                "sourceClass": "CnC",
                "isPrivateIP": false,
                "related": [
                    {
                        "type": "conn",
                        "service": "http"
                    },
                    {
                        "type": "http",
                        "uri": "/c/",
                        "statusCode": 200
                    }
                ],
                "score": 27,
                "children": null,
                "ip": "139.9.36.107"
            },
            {
                "sourceClass": "Proxy",
                "isPrivateIP": false,
                "related": [
                    {
                        "type": "conn",
                        "service": null
                    }
                ],
                "score": 27,
                "children": null,
                "ip": "1.192.136.170"
            },
            {
                "sourceClass": "IPCheck",
                "isPrivateIP": false,
                "related": [
                    {
                        "type": "conn",
                        "service": "ssl"
                    },
                    {
                        "type": "https",
                        "servername": "eco.taobao.com",
                        "statusCode": null
                    }
                ],
                "score": 27,
                "children": null,
                "ip": "59.82.121.73"
            },
            {
                "sourceClass": "Misc activity",
                "isPrivateIP": true,
                "related": [
                    {
                        "type": "conn",
                        "service": null
                    }
                ],
                "score": 17,
                "children": [
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "117.18.232.200"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "117.18.232.200"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "117.18.232.200"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "117.18.232.200"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "117.18.232.200"
                            }
                        ],
                        "ip": "192.168.0.154"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.154"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "https",
                                        "servername": "sadownload.mcafee.com",
                                        "statusCode": null
                                    },
                                    {
                                        "type": "conn",
                                        "service": "ssl"
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.220.70.89"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "https",
                                        "servername": "deff.nelreports.net",
                                        "statusCode": null
                                    },
                                    {
                                        "type": "conn",
                                        "service": "ssl"
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.220.70.104"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.218"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.218"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.218"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "https",
                                        "servername": "catalog.gamepass.com",
                                        "statusCode": null
                                    },
                                    {
                                        "type": "conn",
                                        "service": "ssl"
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.220.70.89"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "https",
                                        "servername": "exo.nel.measure.office.net",
                                        "statusCode": null
                                    },
                                    {
                                        "type": "conn",
                                        "service": "ssl"
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.35.147"
                            },
                            {
                                "sourceClass": "EXE_Source",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "https",
                                        "servername": "exo.nel.measure.office.net",
                                        "statusCode": null
                                    },
                                    {
                                        "type": "conn",
                                        "service": "ssl"
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.248"
                            }
                        ],
                        "ip": "192.168.0.143"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.143"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.133"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.133"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            },
                            {
                                "sourceClass": "IPCheck",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "23.202.34.225"
                            }
                        ],
                        "ip": "192.168.0.122"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.122"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.121"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.121"
                    }
                ],
                "ip": "192.168.0.103"
            },
            {
                "sourceClass": "Information Leak",
                "isPrivateIP": true,
                "related": [
                    {
                        "type": "conn",
                        "service": null
                    }
                ],
                "score": 17,
                "children": [
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.120"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.120"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "Misc activity",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.145.1"
                            },
                            {
                                "sourceClass": "Misc activity",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.89.1"
                            },
                            {
                                "sourceClass": "Misc activity",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.56.1"
                            }
                        ],
                        "ip": "192.168.0.119"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.119"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.118"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.118"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.110"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.110"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "http",
                                "uri": "/upnphost/udhisapi.dll?content=uuid:2f542ade-e060-4195-a89b-25dfaa3f4b7b",
                                "statusCode": 200
                            },
                            {
                                "type": "conn",
                                "service": "http"
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "Information Leak",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.0.104"
                            },
                            {
                                "sourceClass": "Misc activity",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.0.104"
                            },
                            {
                                "sourceClass": "Attempted Information Leak",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.0.104"
                            },
                            {
                                "sourceClass": "Attempted Information Leak",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [],
                                "ip": "192.168.0.104"
                            }
                        ],
                        "ip": "192.168.0.109"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "http",
                                "uri": "/upnphost/udhisapi.dll?content=uuid:2f542ade-e060-4195-a89b-25dfaa3f4b7b",
                                "statusCode": 200
                            },
                            {
                                "type": "conn",
                                "service": "http"
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.109"
                    }
                ],
                "ip": "192.168.0.103"
            },
            {
                "sourceClass": "Information Leak",
                "isPrivateIP": true,
                "related": [
                    {
                        "type": "conn",
                        "service": null
                    }
                ],
                "score": 17,
                "children": [
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.108"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.108"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "http",
                                "uri": "/nasdevicedesc.xml",
                                "statusCode": 200
                            },
                            {
                                "type": "conn",
                                "service": "http"
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            },
                            {
                                "sourceClass": "Misc Attack",
                                "isPrivateIP": false,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": null,
                                "ip": "239.255.255.250"
                            }
                        ],
                        "ip": "192.168.0.106"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "http",
                                "uri": "/nasdevicedesc.xml",
                                "statusCode": 200
                            },
                            {
                                "type": "conn",
                                "service": "http"
                            }
                        ],
                        "score": null,
                        "children": [
                            {
                                "sourceClass": "Misc activity",
                                "isPrivateIP": true,
                                "related": [
                                    {
                                        "type": "conn",
                                        "service": null
                                    }
                                ],
                                "score": null,
                                "children": [
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "stocks-data-service.apple.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "23.202.34.154"
                                    },
                                    {
                                        "sourceClass": "Proxy",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "conn",
                                                "service": null
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "139.224.45.180"
                                    },
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "stocks-data-service.apple.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "184.26.91.31"
                                    },
                                    {
                                        "sourceClass": "IPCheck",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "conn",
                                                "service": null
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "59.82.122.130"
                                    },
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "stocks-data-service.apple.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "184.26.91.31"
                                    },
                                    {
                                        "sourceClass": "IPCheck",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "conn",
                                                "service": null
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "59.82.122.130"
                                    },
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "stocks-data-service.apple.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "184.26.91.31"
                                    },
                                    {
                                        "sourceClass": "IPCheck",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "agoo-report.m.taobao.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "59.82.120.242"
                                    },
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "https",
                                                "servername": "stocks-data-service.apple.com",
                                                "statusCode": null
                                            },
                                            {
                                                "type": "conn",
                                                "service": "ssl"
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "23.202.34.130"
                                    },
                                    {
                                        "sourceClass": "EXE_Source",
                                        "isPrivateIP": false,
                                        "related": [
                                            {
                                                "type": "conn",
                                                "service": null
                                            }
                                        ],
                                        "score": null,
                                        "children": null,
                                        "ip": "23.202.34.162"
                                    }
                                ],
                                "ip": "192.168.0.63"
                            }
                        ],
                        "ip": "192.168.0.106"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.105"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.105"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.102"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.102"
                    },
                    {
                        "sourceClass": "Information Leak",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.101"
                    },
                    {
                        "sourceClass": "Misc activity",
                        "isPrivateIP": true,
                        "related": [
                            {
                                "type": "conn",
                                "service": null
                            }
                        ],
                        "score": null,
                        "children": [],
                        "ip": "192.168.0.101"
                    }
                ],
                "ip": "192.168.0.103"
            },
        ],
        "ip": "192.168.0.63"
    }
]