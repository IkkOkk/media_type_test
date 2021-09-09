//テスト用にfirebaseのmediaTypesコレクションのデータベースの簡易版を作成
//実際の構造は異なるので注意
const MediaTypes = {
    billboard:{
        basicInfoFields:{
            area: 'エリア',
            adress: '住所',
            latitude: '緯度',
            longitude: '経度',
            size:{
                base:'サイズ',
                width:{
                    pre:'W',
                    suf:'[m]'
                },
                height:{
                    pre:'H',
                    suf:'[m]'
                },
            },
            monthlyCost:{
                pre:'¥',
                base:'月額掲載費',
                suf:'/月'
            },
            yearlyCost: {
                pre:'¥',
                base:'年額掲載費',
                suf:'/月'
            },
            constructionCost:{
                pre:'¥',
                base:'施工費'
            },
            recoverlyCost: {
                pre:'¥',
                base:'回復費用'
            },
            direction:'向き',
            hasIllumination:'照明',
            name: '名前',
            summary: '概要',
            note: '備考',
        },
        effectIndicatorField:{
            totalImpression:100000,
            CPM: 120
        },
        propertyFields:{
            sex:'性別',
            age:'年齢',
            sexRatioByAge:'年代別性別比'
        }
    }
}

export default MediaTypes