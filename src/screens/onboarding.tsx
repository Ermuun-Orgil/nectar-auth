import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Background, FlexBox, Box, MainIcon, NectarIcon, Text } from '../components';

const Box1 = styled(FlexBox)`
    background-color: red;
`

const Box2 = styled(FlexBox)`
    background-color: blue;
`

const Box3 = styled(FlexBox)`
    background-color: green;
`

export const OnboardingScreen = () => {
    return (
        <Background flex={1} color={"violet"}>
            <FlexBox flex={1}></FlexBox>
            <FlexBox flex={1}>
                <FlexBox flex={1}>
                    <MainIcon width={48} height={56}></MainIcon>
                </FlexBox>
                <FlexBox flex={1}>
                    <Text color={"white"} size={"big"} weight={"bold"} letterSpacing={"1"} align={"center"}>
                        Welcome to our store
                    </Text>
                </FlexBox>
                <FlexBox flex={1}>
                    <Text color={"white"} size={"medium"} weight={"normal"} letterSpacing={"1"} align={"center"}>
                        Get your groceries in as fast as one hour
                    </Text>
                </FlexBox>
                <FlexBox flex={1}>
                    <Button></Button>
                </FlexBox>
            </FlexBox>
        </Background>
    );
};
