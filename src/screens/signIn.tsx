import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { Background, FlexBox, Box, MainIcon, NectarIcon, Text, Image, Button } from '../components';

export const SignIn = () => {
    return (
        // <Image flex={1} source={require("../assets/man.png")}>
        <Background color={"black"} flex={1}>
            <FlexBox flex={1}></FlexBox>
            <FlexBox justifyContent={"flex-start"} flex={1}>
                <MainIcon width={48} height={56}></MainIcon>
                <Box height={"36px"}></Box>
                <Box width={"260px"} height={"120px"}>
                    <Text color={"white"} size={"48px"} weight={"bold"} letterSpacing={"1px"} align={"center"}>
                        Welcome to our store
                    </Text>
                </Box>
                <Text color={"white"} size={"16px"} weight={"normal"} letterSpacing={"1px"} align={"center"}>
                    Get your groceries in as fast as one hour
                </Text>
                <Box height={"41px"}></Box>
                <Button width={353} height={67}>
                    <FlexBox flex={1} alignItems={"center"} justifyContent={"center"}>
                        <Text size={"18px"} align={"center"} weight={"bold"} color={"#FFF9FF"}>Get Started</Text>
                    </FlexBox>
                </Button>
            </FlexBox>
        </Background>
        // </Image>
    );
};
