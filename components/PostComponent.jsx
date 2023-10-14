import styled from "styled-components/native";
import {useEffect} from "react";
const PostView = styled.View`
  flex-direction: row;
  padding:10px 2px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0,0,0,0.3);
  border-bottom-style: solid ;
`;

const PostImage = styled.Image`
  border-radius: 7px;
  width: 120px;
  height: 180px;
  margin-right: 12px;
`;

const PostTitle =styled.Text`
  font-size: 18px;
  font-weight:700;
  
`;

const PostDetails = styled.View`
  justify-content: center;
`;
const PostDate = styled.Text`
  font-size: 12px;
  color: rgba(0,0,0,0.4);
`;
export const PostComponent = ({title,imageUrl,createdAt}) => {
    return (
        <PostView>
            <PostImage source = {{uri:imageUrl}}/>
            <PostDetails>
                <PostTitle>{title}</PostTitle>
                <PostDate>{createdAt}</PostDate>
            </PostDetails>
        </PostView>
    );
};

