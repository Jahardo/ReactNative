import React from 'react';
import styled from "styled-components/native";
import {ActivityIndicator, Text} from "react-native";

const LoaderStyle = styled.View`
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Loader = () => {
    return (
        <LoaderStyle>
            <ActivityIndicator size={"large"}/>
            <Text>Loading</Text>
        </LoaderStyle>
    );
};

export default Loader;