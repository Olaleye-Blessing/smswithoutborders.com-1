import React from "react";
import tw from "twin.macro";
import phone from "images/phone.png";
import swobflow from "images/swobflow.gif";

import { MainNavbar, Footer, PageAnimationWrapper } from "components";
import { FiUserPlus, FiLogIn, FiDownload, FiShield, FiSave } from "react-icons/fi";
import { DiOpensource } from "react-icons/di";
import { IoAccessibility, IoLogoGooglePlaystore as PlayStore } from "react-icons/io5";
import { GiCheckboxTree } from "react-icons/gi";
import { GoMarkGithub } from "react-icons/go";

const Container = tw.section`px-8 mx-auto text-gray-900`;
const TextContainer = tw.div`flex-grow sm:text-left text-center mt-6 sm:mt-0`;
const SectionContainer = tw.section`mx-auto flex px-8 md:px-8 py-12 md:flex-row flex-col items-center bg-primary-600`;
const ImageContainer = tw.div`md:w-1/2 mb-10 md:mb-0`;
const DetailsContainer = tw.div`md:w-1/2 p-2 flex flex-col md:-ml-10 mb-12 items-start order-first md:order-last`;
const Heading = tw.h1`font-black text-3xl sm:text-5xl mb-8  text-gray-900 tracking-wide leading-relaxed`;
const SubHeading = tw.h2`text-gray-900 text-base md:text-xl font-bold mb-2 leading-relaxed`;
const Description = tw.h3`text-lg leading-relaxed text-gray-800 mb-5 font-normal`;
const Image = tw.img`block mx-auto shadow-lg rounded-2xl transform h-[500px] w-[280px] md:(-rotate-25 mt-8 -mb-24 w-[300px] h-[580px])`;
const DescItem = tw.div`flex items-center mx-auto pb-10 border-gray-200 sm:flex-row flex-col`;
const IconBlock = tw.div`sm:w-32 sm:h-32 h-24 w-24 inline-flex items-center justify-center rounded-full bg-white shadow-xl text-primary-900 flex-shrink-0`;
const Text = tw.p`leading-relaxed text-base`;
const Column = tw.div`w-full`;
const Row = tw.div`w-full`;
const ButtonGroup = tw.div`flex flex-row w-full mt-4`;
const Button = tw.a`inline-flex items-center justify-center mr-2 px-6 py-2 mb-4 md:mr-4 rounded-lg bg-white text-gray-800 font-bold hocus:(shadow-xl no-underline text-gray-900) appearance-none`;


const HomePage = () => {

    return (
        <>
            <PageAnimationWrapper tw="h-screen">
                <MainNavbar />
                <SectionContainer>
                    <ImageContainer>
                        <Image
                            src={phone}
                            alt="SWOB mobile"
                        />
                    </ImageContainer>
                    <DetailsContainer>
                        <Heading>Stay Productive</Heading>
                        <Description>
                            In this age of communication, keep in touch with your contacts across the internet without
                            access to an active internet connection. Store your access to your favourite communications
                            platforms while online, use them while offline.
                        </Description>
                        <ButtonGroup>
                            <Button href="https://play.google.com/store/apps/details?id=com.afkanerd.sw0b" target="_blank">
                                <PlayStore size={28} />
                                <div tw="ml-2">
                                    <small tw="font-light">Get SWOB</small>
                                    <p tw="tracking-wide">Play Store</p>
                                </div>
                            </Button>
                            <Button href="https://github.com/smswithoutborders/SMSwithoutBorders-Android/releases" target="_blank">
                                <GoMarkGithub size={28} />
                                <div tw="ml-2">
                                    <small tw="font-light">Get SWOB</small>
                                    <p tw="tracking-wide">Github</p>
                                </div>
                            </Button>
                        </ButtonGroup>
                    </DetailsContainer>
                </SectionContainer>

                <Container>
                    <Row tw="pt-20 pb-12">
                        <Heading tw="text-center">How it works</Heading>
                        <SubHeading tw="text-center font-normal">Using SWOB is as easy as authenticating your credentials</SubHeading>
                    </Row>

                    <Row tw="flex flex-col md:flex-row mb-16">
                        <Column tw="md:w-1/2 md:pl-20">
                            <DescItem>
                                <IconBlock tw="sm:mr-10">
                                    <FiUserPlus size={48} />
                                </IconBlock>
                                <TextContainer>
                                    <SubHeading>Sign Up </SubHeading>
                                    <Text>Signup for a SWOB account</Text>
                                </TextContainer>
                            </DescItem>
                            <DescItem>

                                <IconBlock tw="sm:mr-10">
                                    <FiSave size={48} />
                                </IconBlock>
                                <TextContainer>
                                    <SubHeading>Goto Wallet, </SubHeading>
                                    <Text>select and store the platform for which you want access for later offline
                                        uses</Text>
                                </TextContainer>
                            </DescItem>
                            <DescItem>
                                <IconBlock tw="sm:mr-10">
                                    <FiDownload size={48} />
                                </IconBlock>
                                <TextContainer>
                                    <SubHeading>Get the SWOB app from the Playstore</SubHeading>
                                    <Text>Goto your SWOB profile online and click on Sync. Use your SWOB app to scan your QR code</Text>
                                </TextContainer>
                            </DescItem>
                            <DescItem>
                                <IconBlock tw="sm:mr-10">
                                    <FiLogIn size={48} />
                                </IconBlock>
                                <TextContainer>
                                    <SubHeading>Use App</SubHeading>
                                    <Text>Enter your password in the app and begin transmitting messages while offline using SMS messages</Text>
                                </TextContainer>
                            </DescItem>
                        </Column>

                        <Column tw="md:w-1/2 grid place-items-center ">
                            <Image
                                tw="md:rotate-0"
                                src={swobflow}
                                alt="How swob works"
                            />
                        </Column>
                    </Row>
                </Container>

                <Container tw="bg-gray-100">
                    <div tw="py-16">
                        <Heading tw="text-center">Why use SWOB?</Heading>
                    </div>
                    <Column tw="lg:w-3/5 mx-auto">
                        <DescItem>
                            <IconBlock tw="sm:mr-10">
                                <IoAccessibility size={48} />
                            </IconBlock>
                            <TextContainer>
                                <SubHeading>Accessibility </SubHeading>
                                <Text>SWOB’s mobile app allows users to have offline communication wherever they
                                    are. With as simple as having an SMS message smartphone you can maintain
                                    communications with your online platforms</Text>
                            </TextContainer>
                        </DescItem>
                        <DescItem>
                            <TextContainer>
                                <SubHeading>Security</SubHeading>
                                <Text>SWOB transmits messages in securely encrypted formats. This secures every
                                    communication from being accessed by intermediate parties while in transit.</Text>
                            </TextContainer>
                            <IconBlock tw="sm:ml-10 sm:order-none order-first  ">
                                <FiShield size={48} />
                            </IconBlock>
                        </DescItem>
                        <DescItem>
                            <IconBlock tw="sm:mr-10">
                                <DiOpensource size={64} />
                            </IconBlock>
                            <TextContainer>
                                <SubHeading>Open source</SubHeading>
                                <Text>Every component of SWOB is open sourced! From the mobile app to the routing
                                    mechanisms we use to get your SMS messages to reach your intended
                                    platforms.</Text>
                            </TextContainer>
                        </DescItem>
                        <DescItem>
                            <TextContainer>
                                <SubHeading>Decentralized</SubHeading>
                                <Text>SWOB is built to work in decentralized models. Anyone can host a SWOB server.
                                    It’s as easy as understanding how to use it</Text>
                            </TextContainer>
                            <IconBlock tw="sm:ml-10 sm:order-none order-first  ">
                                <GiCheckboxTree size={48} />
                            </IconBlock>
                        </DescItem>
                    </Column>
                </Container>
                <Footer />
            </PageAnimationWrapper>
        </>
    );
};

export default HomePage;
