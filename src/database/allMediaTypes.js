//時間があれば、実際のfirestoreに入っているデータのコピーから媒体情報表示にチャレンジする
const AllMediaTypes = {
    "billboard": {
        "name": "ビルボード",
        "purchasePeriodUnit": "week",
        "uid": "billboard",
        "basicInfoFields": [
            {
                "dispayedPrefix": "",
                "displayMethod": null,
                "dispayedSuffix": "",
                "displayedName": "住所",
                "fieldName": "address",
                "valueType": "string"
            },
            {
                "displayedName": "緯度",
                "dispayedPrefix": "N",
                "fieldName": "latitude",
                "displayMethod": null,
                "dispayedSuffix": "",
                "valueType": "number"
            },
            {
                "dispayedSuffix": "",
                "displayMethod": null,
                "fieldName": "longitude",
                "dispayedPrefix": "E",
                "displayedName": "経度",
                "valueType": "number"
            },
            {
                "dispayedPrefix": "",
                "fieldName": "horizontalWidth",
                "dispayedSuffix": "[m]",
                "displayMethod": null,
                "displayedName": "サイズ（横幅）",
                "valueType": "number"
            },
            {
                "dispayedSuffix": "[m]",
                "fieldName": "verticalWidth",
                "displayMethod": null,
                "dispayedPrefix": "",
                "displayedName": "サイズ（縦幅）",
                "valueType": "number"
            },
            {
                "dispayedSuffix": " /月",
                "dispayedPrefix": "¥",
                "displayMethod": null,
                "displayedName": "月額掲載費",
                "fieldName": "monthlyCost",
                "valueType": "number"
            },
            {
                "displayedName": "年額掲載費",
                "dispayedPrefix": "¥",
                "fieldName": "yearlyCost",
                "dispayedSuffix": " /年",
                "displayMethod": null,
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "displayedName": "施工費",
                "dispayedSuffix": "",
                "dispayedPrefix": "¥",
                "fieldName": "constructionCost",
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "dispayedSuffix": "",
                "dispayedPrefix": "¥",
                "displayedName": "回復費",
                "fieldName": "recoveryCost",
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "fieldName": "eightDirection",
                "dispayedSuffix": "",
                "dispayedPrefix": "",
                "displayedName": "向き",
                "valueType": "string"
            },
            {
                "dispayedPrefix": "",
                "displayMethod": "bool2Has",
                "dispayedSuffix": "",
                "displayedName": "照明",
                "fieldName": "hasIllumination",
                "valueType": "bool"
            },
            {
                "fieldName": "area",
                "displayMethod": null,
                "displayedPrefix": "",
                "displayedName": "エリア",
                "displayedSuffix": "",
                "valueType": "string"
            }
        ],
        "propertyFields": [
            {
                "fieldName": "totalSexRatio",
                "displayedName": "性別",
                "graphType": "pie"
            },
            {
                "diplayedName": "年齢",
                "graphType": "pie",
                "fieldName": "ageRatio"
            },
            {
                "fieldName": "sexRatioByAge",
                "diplayedName": "年代別性別比",
                "graphType": "stackedBar"
            }
        ],
        "effectIndicatorFields": [
            {
                "displayedName": "総インプレッション数",
                "displayMethod": null,
                "displayedPrefix": "",
                "summary": null,
                "fieldName": "total_impression",
                "displayedSuffix": ""
            },
            {
                "displayedSuffix": "",
                "displayedPrefix": "¥",
                "displayedName": "CPM ※１",
                "fieldName": "cpm",
                "displayMethod": null,
                "summary": "※１：CPM（Cost Per Miles）は、6ヶ月掲載した際の1000インプレッションあたりのコスト（税込みでの掲載価格＋施工回復費）。表示される価格は全て税込み。"
            }
        ],
        "subCollection": {}
    },
    "digitalSignage": {
        "effectIndicatorFields": [
            {
                "summary": null,
                "fieldName": "total_impression",
                "displayedSuffix": "",
                "displayMethod": null,
                "displayedName": "総インプレッション数",
                "displayedPrefix": ""
            },
            {
                "displayMethod": null,
                "summary": "※１：CPM（Cost Per Miles）は、6ヶ月掲載した際の1000インプレッションあたりのコスト（税込みでの掲載価格＋施工回復費）。表示される価格は全て税込み。",
                "displayedSuffix": "",
                "displayedName": "CPM ※１",
                "fieldName": "cpm",
                "displayedPrefix": "¥"
            }
        ],
        "uid": "digitalSignage",
        "propertyFields": [
            {
                "graphType": "pie",
                "fieldName": "totalSexRatio",
                "displayedName": "性別"
            },
            {
                "fieldName": "ageRatio",
                "diplayedName": "年齢",
                "graphType": "pie"
            },
            {
                "diplayedName": "年代別性別比",
                "graphType": "stackedBar",
                "fieldName": "sexRatioByAge"
            }
        ],
        "basicInfoFields": [
            {
                "displayedName": "住所",
                "displayedSuffix": "",
                "displayMethod": null,
                "displayedPrefix": "",
                "fieldName": "addres",
                "valueType": "string"
            },
            {
                "displayedPrefix": "N",
                "displayedName": "緯度",
                "fieldName": "latitude",
                "displayedSuffix": "",
                "displayMethod": null,
                "valueType": "number"
            },
            {
                "fieldName": "longitude",
                "displayedSuffix": "",
                "displayMethod": null,
                "displayedName": "経度",
                "displayedPrefix": "E",
                "valueType": "number"
            },
            {
                "displayedSuffix": "[m]",
                "displayedPrefix": "",
                "displayMethod": null,
                "displayedName": "サイズ(横幅)",
                "fieldName": "horizontalWidth",
                "valueType": "number"
            },
            {
                "fieldName": "verticalWidth",
                "displayMethod": null,
                "displayedSuffix": "[m]",
                "displayedPrefix": "",
                "displayedName": "サイズ(縦幅)",
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "displayedSuffix": " /年",
                "displayedPrefix": "¥",
                "displayedName": "年額掲載費",
                "fieldName": "yearlyCost",
                "valueType": "number"
            },
            {
                "fieldName": "monthlyCost",
                "displayedSuffix": " /年",
                "displayedPrefix": "¥",
                "displayMethod": null,
                "displayedName": "月額掲載費",
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "fieldName": "eightDirection",
                "displayedName": "向き",
                "displayedSuffix": "",
                "displayedPrefix": "",
                "valueType": "string"
            },
            {
                "fieldName": "area",
                "displayedName": "エリア",
                "displayedPrefix": "",
                "displayMethod": null,
                "displayedSuffix": "",
                "valueType": "number"
            },
            {
                "fieldName": "hasAudio",
                "displayedPrefix": "",
                "displayMethod": "boolHas",
                "displayedName": "音声",
                "displayedSuffix": "",
                "valueType": "bool"
            }
        ],
        "name": "デジタルサイネージ",
        "subCollection": {}
    },
    "poster": {
        "propertyFields": [
            {
                "graphType": "pie",
                "displayedName": "性別",
                "fieldName": "totalSexRatio"
            },
            {
                "diplayedName": "年齢",
                "fieldName": "ageRatio",
                "graphType": "pie"
            },
            {
                "fieldName": "sexRatioByAge",
                "graphType": "stackedBar",
                "diplayedName": "年代別性別比"
            }
        ],
        "effectIndicatorFields": [
            {
                "displayedPrefix": "",
                "fieldName": "total_impression",
                "displayedSuffix": "",
                "displayMethod": null,
                "displayedName": "総インプレッション数",
                "summary": null
            },
            {
                "displayedPrefix": "¥",
                "displayMethod": null,
                "summary": "※１：CPM（Cost Per Miles）は、6ヶ月掲載した際の1000インプレッションあたりのコスト（税込みでの掲載価格＋施工回復費）。表示される価格は全て税込み。",
                "displayedName": "CPM ※１",
                "displayedSuffix": "",
                "fieldName": "cpm"
            }
        ],
        "purchasePeriodUnit": "week",
        "basicInfoFields": [
            {
                "dispayedSuffix": "",
                "displayedName": "住所",
                "displayMethod": null,
                "dispayedPrefix": "",
                "fieldName": "address",
                "valueType": "string"
            },
            {
                "fieldName": "latitude",
                "displayMethod": null,
                "dispayedSuffix": "",
                "dispayedPrefix": "N",
                "displayedName": "緯度",
                "valueType": "number"
            },
            {
                "displayMethod": null,
                "dispayedPrefix": "E",
                "fieldName": "longitude",
                "dispayedSuffix": "",
                "displayedName": "経度",
                "valueType": "number"
            },
            {
                "dispayedSuffix": "[m]",
                "dispayedPrefix": "",
                "fieldName": "horizontalWidth",
                "displayedName": "サイズ（横幅）",
                "displayMethod": null,
                "valueType": "number"
            },
            {
                "displayedName": "サイズ（縦幅）",
                "fieldName": "verticalWidth",
                "dispayedSuffix": "[m]",
                "dispayedPrefix": "",
                "displayMethod": null,
                "valueType": "number"
            },
            {
                "displayedName": "月額掲載費",
                "dispayedPrefix": "¥",
                "dispayedSuffix": " /月",
                "fieldName": "monthlyCost",
                "displayMethod": null,
                "valueType": "number"
            },
            {
                "fieldName": "yearlyCost",
                "dispayedPrefix": "¥",
                "dispayedSuffix": " /年",
                "displayMethod": null,
                "displayedName": "年額掲載費",
                "valueType": "number"
            },
            {
                "dispayedSuffix": "",
                "dispayedPrefix": "¥",
                "fieldName": "constructionCost",
                "displayMethod": null,
                "displayedName": "施工費",
                "valueType": "number"
            },
            {
                "displayedName": "回復費",
                "fieldName": "recoveryCost",
                "dispayedSuffix": "",
                "displayMethod": null,
                "dispayedPrefix": "¥",
                "valueType": "number"
            },
            {
                "displayedName": "向き",
                "fieldName": "eightDirection",
                "displayMethod": null,
                "dispayedPrefix": "",
                "dispayedSuffix": "",
                "valueType": "string"
            },
            {
                "fieldName": "hasIllumination",
                "dispayedSuffix": "",
                "displayMethod": "bool2Has",
                "dispayedPrefix": "",
                "displayedName": "照明",
                "valueType": "bool"
            },
            {
                "displayedPrefix": "",
                "displayedSuffix": "",
                "displayedName": "エリア",
                "displayMethod": null,
                "fieldName": "area",
                "valueType": "string"
            }
        ],
        "uid": "poster",
        "name": "ポスター",
        "subCollection": {}
    }
}

export default AllMediaTypes