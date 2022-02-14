import styled from "styled-components";

export const Root = styled.div`
  width: 100vw;
  padding: 20px;
`;
export const DetailBottom = styled.div`
  height: 35vh;
  width: 100%;
  margin-top: 2vh;
`;
export const DetailTop = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
export const DetailTopPhoto = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const DetailTopMaininfor = styled.div`
  padding: 30px;
  font-size: 20px;
`;
export const PartTitle = styled.div`
  position: absolute;
  background-color: white;
  top: -20px;
`;
export const UserPhoto = styled.div`
  display: flex;
  align-items: end;
`;
export const PreviewPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;
export const UserInfo = styled.div`
  margin-top: 20px;
  text-align: center;
`;
export const SubPhotoItem = styled.div`
    margin-top: 10px;
`;
export const UserMainInfo = styled.div`
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px 5px 5px 5px;
  position: relative;
`;
export const UserMainInfoItem = styled.div`
  width: 100%;
`;
export const LocationPart = styled.div`
  margin-top: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px 5px 5px 5px;
  position: relative;
`;
export const DetailItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const LoginPart = styled.div`
  margin-top: 30px;
  border: 1px solid grey;
  border-radius: 15px;
  padding: 15px 5px 5px 5px;
  position: relative;
`;
export const SubDetailItem = styled.div`
    margin-left: 100px;
`;
export const SubLocationItem = styled.div`
    margin-left: 70px;
`;