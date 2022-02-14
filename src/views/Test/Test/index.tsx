import React, { useState, useEffect } from 'react';
import { Card, Row, Col, List, Avatar, Divider } from 'antd';
import Image from 'next/image';
import {
    Root,
    DetailTop,
    DetailTopPhoto,
    DetailTopMaininfor,
    UserPhoto,
    PreviewPhoto,
    SubLocationItem,
    SubPhotoItem,
    SubDetailItem,
    UserInfo,
    UserMainInfo,
    UserMainInfoItem,
    PartTitle,
    LocationPart,
    DetailItem,
    LoginPart,
} from "./Test.style";
const fakeDataUrl = 'https://randomuser.me/api/?results=1';
export default function TestView() {
    const [data, setData] = useState([]);
    const [detail, setDetail] = useState<any>();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            await fetch(fakeDataUrl)
                .then(res => res.json())
                .then(body => {
                    setData(data.concat(body.results));
                    setLoading(false);
                });
        }
        fetchData();
    }, []);

    return (
        <Root>
            <Row>
                <Col span={6}>
                    <Card title='Male List' className='antdCardLeft'>
                        <List loading={loading} className='antdList'>
                            {
                                data.map((item: any, key: any) => {
                                    if (item.gender === 'male') {
                                        return <List.Item key={key}>
                                            <List.Item.Meta
                                                avatar={<Avatar src={item.picture.large} />}
                                                title={<a onClick={() => {
                                                    setDetail(item);
                                                }}>{item.name.last}</a>}
                                                description={item.email}
                                            />
                                        </List.Item>
                                    }
                                })
                            }
                        </List>
                    </Card>
                </Col>
                <Col span={1} />
                <Col span={17}>
                    <Card title='User detail' className='antdCardRight'>
                        {detail ? <DetailTop>
                            <DetailTopPhoto>
                                <UserPhoto>
                                    <Image
                                        src={detail.picture.large}
                                        width={150}
                                        height={150}
                                        className="imgaeRadius"
                                    />
                                    <PreviewPhoto>
                                        <Image
                                            src={detail.picture.thumbnail}
                                            width={30}
                                            height={30}
                                            className="imgaeRadius thumbimage"
                                        />
                                        <SubPhotoItem>
                                            <Image
                                                src={detail.picture.medium}
                                                width={50}
                                                height={50}
                                                className="imgaeRadius"
                                            />
                                        </SubPhotoItem>
                                    </PreviewPhoto>
                                </UserPhoto>
                                <UserInfo>
                                    {detail.name.title +
                                        " " +
                                        detail.name.first +
                                        " " +
                                        detail.name.last}
                                    <br />
                                    {detail.id.name + " " + detail.id.value}
                                    <br />
                                    {detail.email}
                                </UserInfo>
                            </DetailTopPhoto>
                            <Divider type="vertical" style={{ height: "100%" }} />
                            <DetailTopMaininfor>
                                <UserMainInfo>
                                    <PartTitle>UserMainInfo</PartTitle>
                                    <UserMainInfoItem>gender : {detail.gender}</UserMainInfoItem>
                                    <UserMainInfoItem> phone : {detail.phone}</UserMainInfoItem>
                                    <UserMainInfoItem> cell : {detail.cell}</UserMainInfoItem>
                                    <UserMainInfoItem> Nation : {detail.nat}</UserMainInfoItem>
                                </UserMainInfo>
                                <LocationPart>
                                    <PartTitle>Location</PartTitle>
                                    <DetailItem>
                                        Street :{" "}
                                        {detail.location.street.number +
                                            ", " +
                                            detail.location.street.name}
                                    </DetailItem>
                                    <DetailItem>
                                        <div>City : {detail.location.city}</div>
                                        <SubDetailItem>
                                            State : {detail.location.state}
                                        </SubDetailItem>
                                    </DetailItem>
                                    <DetailItem>
                                        <div>Country : {detail.location.country}</div>
                                        <SubLocationItem>
                                            Postcode : {detail.location.postcode}
                                        </SubLocationItem>
                                    </DetailItem>
                                    <DetailItem>
                                        <div>Latitude : {detail.location.coordinates.latitude}</div>
                                        <SubLocationItem>
                                            Longitude : {detail.location.coordinates.longitude}
                                        </SubLocationItem>
                                        <SubLocationItem>
                                            Offset : {detail.location.timezone.offset}
                                        </SubLocationItem>
                                    </DetailItem>
                                    <DetailItem>
                                        {" "}
                                        Description : {detail.location.timezone.description}
                                    </DetailItem>
                                </LocationPart>
                                <LoginPart>
                                    <PartTitle>LoginInfo</PartTitle>
                                    uuid : {detail.login.uuid}
                                    <DetailItem>
                                        <div>Username : {detail.login.username}</div>
                                        <SubDetailItem>
                                            Password : {detail.login.password}
                                        </SubDetailItem>
                                    </DetailItem>
                                    <DetailItem>
                                        <div>Salt : {detail.login.salt}</div>
                                        <SubDetailItem>
                                            Md5 : {detail.login.md5}
                                        </SubDetailItem>
                                    </DetailItem>
                                    <DetailItem>Sha1 : {detail.login.sha1}</DetailItem>
                                    Sha256: {detail.login.sha256}
                                    <DetailItem>
                                        <div>Dob date : {detail.dob.date}</div>
                                        <SubDetailItem>
                                            Dob age : {detail.dob.age}
                                        </SubDetailItem>
                                    </DetailItem>
                                    <DetailItem>
                                        <div>Registered date : {detail.registered.date}</div>
                                        <SubDetailItem>
                                            Registered age : {detail.registered.age}
                                        </SubDetailItem>
                                    </DetailItem>
                                </LoginPart>
                            </DetailTopMaininfor>
                        </DetailTop> : ""}
                    </Card>
                </Col>
            </Row>
        </Root >
    );
}  
