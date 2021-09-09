import React, { useState, useEffect} from 'react'
import MediaTypes from '../database/mediaTypes'
import SampleMedia from '../database/sampleMedia'

const Media = () => {
    /*
    mediaのmediaTypeを受け取って、どのmediaTypeに属するかを判断する
    テスト用のmediaのmediaTypeはbillboardなのでreturn中では、変数を使わなかった
    mediaのmediaTypeフィールドに登録されている文字列とmediaTypesコレクションに含まれるドキュメントの文字列が異なるのは面倒なので統一した方が良いと思った

    const [mediaType, setMediaType] = useState('')
    useEffect(() => {
        switch(SampleMedia.mediaType){
            case 'mediaTypeBillBoard':
                setMediaType('billboard');
                break;
            case 'mediaTypeDigitalVision':
                setMediaType('billboard');
                break;
            case 'mediaTypePoster':
                setMediaType('billboard');
                break;
            default:
        }
    }, [])
    console.log(mediaType)
    */



    return (
        <>
            <ul>
                <ul>
                    <li>
                        概要<br />
                        {SampleMedia.summary}
                    </li>
                    <br />
                    <li>
                        基本情報
                        <ul>
                            <li>
                                {MediaTypes.billboard.basicInfoFields.area}：{SampleMedia.area}
                                {/*
                                ↑前半がmediaTypesのフィールドデータ、後半が対応するmediaのフィールドデータ
                                長いので先にMediaTypes.billboard.basicInfoFieldsくらいまでをまとめてオブジェクトを作っておくと良いと思った
                                */}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.adress}：{SampleMedia.adress}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.latitude}：N{SampleMedia.latitude}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.longitude}：E{SampleMedia.longitude}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.size.base}：{MediaTypes.billboard.basicInfoFields.size.width.pre}{SampleMedia.size.width}{MediaTypes.billboard.basicInfoFields.size.width.suf}{MediaTypes.billboard.basicInfoFields.size.height.pre}{SampleMedia.size.width}{MediaTypes.billboard.basicInfoFields.size.height.suf}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.monthlyCost.base}：{MediaTypes.billboard.basicInfoFields.monthlyCost.pre}{SampleMedia.monthlyCost}{MediaTypes.billboard.basicInfoFields.monthlyCost.suf}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.yearlyCost.base}：{MediaTypes.billboard.basicInfoFields.yearlyCost.pre}{SampleMedia.yearlyCost}{MediaTypes.billboard.basicInfoFields.yearlyCost.suf}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.constructionCost.base}：{MediaTypes.billboard.basicInfoFields.constructionCost.pre}{SampleMedia.constructionCost}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.recoverlyCost.base}：{MediaTypes.billboard.basicInfoFields.recoverlyCost.pre}{SampleMedia.recoverlyCost}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.direction}：{SampleMedia.direction}
                            </li>
                            <li>
                            {MediaTypes.billboard.basicInfoFields.hasIllumination}：{SampleMedia.hasIllumination}
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        効果
                        <ul>
                            <li>
                                {MediaTypes.billboard.effectIndicatorField.totalImpression}：{SampleMedia.totalImpression}
                            </li>
                            <li>
                                {MediaTypes.billboard.effectIndicatorField.CPM}：{SampleMedia.CPM}
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        属性
                        <ul>
                            <li>
                                {MediaTypes.billboard.propertyFields.sex}
                            </li>
                            <li>
                                {MediaTypes.billboard.propertyFields.age}
                            </li>
                            <li>
                                {MediaTypes.billboard.propertyFields.sexRatioByAge}
                            </li>
                        </ul>
                    </li>
                    <br />
                    <li>
                        備考
                        <br />
                        {SampleMedia.note}
                    </li>
                </ul>
            </ul>
        </>
    )
}

export default Media