import React from "react";
import SEO from "../components/seo"
import styled from '@emotion/styled'
import Layout from "../components/layout";


const TestimonialsPageContainer = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 0;
`

const TestimonialsHeader = styled.h1`
    color: #06182a;
`

const TestimonialsContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
`

const TestimonialCard = styled.h2`
    max-width: 500px;
    padding: 24px;
    padding-bottom: 16px;
    margin: 12px;
    border-radius: 10px;
    background-color: #023660;
    color: white;
    font-family: Helvetica, sans-serif;
`

const TestimonialCardName = styled.h2`
    font-weight: bold;
    margin-bottom: 12px;
`

const TestimonialCardStory = styled.p`
    font-weight: normal;
    font-size: 14pt;
`


const TestimonialsPage = () => (
    <Layout>
        <SEO title="Testimonials" />
        <TestimonialsPageContainer>
            <TestimonialsHeader>
                Testimonials
            </TestimonialsHeader>
            <TestimonialsContainer>
                <TestimonialCard>
                    <TestimonialCardName>
                        Nate, 26
                    </TestimonialCardName>
                    <TestimonialCardStory>
                        I chose to volunteer with Vacay for Democracy because the organization has created an 
                        effective way for young adults to civically engage in voting-related initiatives while 
                        also building a lasting community that extends past the end of the trip; the notion that
                        I would be potentially building a community full of enthusiastic like-minded folks was 
                        very enticing to me! <br/>
                        <br/>
                        Volunteering allowed me to meet like-minded young adults who are also passionate about 
                        civic engagement and being able to be part of a community revolved around these tenets. 
                        I loved being able to step outside the comfortable familiarity of my community to learn 
                        about voting initiatives going on in other states and cities. <br />
                        <br/>
                        Young people impacted by the decisions of elected officials and therefore, should have 
                        an equal say in what goes on. By volunteering, whether it's something canvassing for 
                        votes or applying to be on a city commission, we're reclaiming some of the agency that 
                        has been lost through false pre-conceived notions of our ability to contribute to the 
                        conversation.
                    </TestimonialCardStory>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialCardName>
                        Nate, 26
                    </TestimonialCardName>
                    <TestimonialCardStory>
                        I chose to volunteer with Vacay for Democracy because the organization has created an 
                        effective way for young adults to civically engage in voting-related initiatives while 
                        also building a lasting community that extends past the end of the trip; the notion that
                        I would be potentially building a community full of enthusiastic like-minded folks was 
                        very enticing to me! <br/>
                        <br/>
                        Volunteering allowed me to meet like-minded young adults who are also passionate about 
                        civic engagement and being able to be part of a community revolved around these tenets. 
                        I loved being able to step outside the comfortable familiarity of my community to learn 
                        about voting initiatives going on in other states and cities. <br />
                        <br/>
                        Young people impacted by the decisions of elected officials and therefore, should have 
                        an equal say in what goes on. By volunteering, whether it's something canvassing for 
                        votes or applying to be on a city commission, we're reclaiming some of the agency that 
                        has been lost through false pre-conceived notions of our ability to contribute to the 
                        conversation.
                    </TestimonialCardStory>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialCardName>
                        Tara, 36
                    </TestimonialCardName>
                    <TestimonialCardStory>
                        I volunteered for Vacay for Democracy, because I’d never been involved with civic action
                        work and it sounded really fun to be able to travel with a group of fun (hilarious, 
                        creative, kind, compassionate, the list goes on) and progressive people. I wanted to 
                        say yes to something that was outside of my comfort zone, and so I could have a hand 
                        in making a difference. <br/>
                        <br/>
                        My experience showed me that talking to neighbors, building connection and supporting 
                        communities can cause change. The work wasn't as hard or as scary as I thought prior 
                        to trying it, but it sure is impactful. I am so proud of the work our team did in 
                        Virginia! <br/>
                        <br/>
                        Building relationships with our team was my favorite part of the trip: It's all about 
                        the people. That's what makes the sense of urgency real, and the impact real. Although 
                        we worked hard, we never lost sight of having fun together and supporting each other. 
                        This was such a special group. <br/>
                        <br/>
                        Volunteering helped me build my awareness around certain issues I knew little to nothing 
                        about. Young people have such unique and novel ideas for what we want our future look 
                        like, it's important we hone our skills and and get involved so that we can be apart 
                        of creating change! 
                    </TestimonialCardStory>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialCardName>
                        Faiza, 25
                    </TestimonialCardName>
                    <TestimonialCardStory>
                        My decision to volunteer was based on a few different reasons, one being that was 
                        looking to get back into politics and this trip seemed liked a good starting point.<br/>
                        <br/>
                        This experience has taught me that canvassing isn’t all about convincing people to 
                        vote for a particular candidate. In my past experience as a campaign staffer, 
                        the hardest part of my job was feeling the need to persuade voters to vote a certain 
                        way. <br/>
                        <br/>
                        My favorite part of volunteering was definitely the people I was doing it with! They 
                        made it fun and memorable. Most of the people on the trip had never canvassed before 
                        and it was a treat to get to do meaningful work with people who care and are willing 
                        to put in the hard work. I really admired that we were all there for the same 
                        reasons. Having had previous experience canvassing, It felt like I was right where 
                        I needed to be. <br/>
                        <br/>
                        I think everyone should volunteer so they are able to experience being apart of 
                        something that makes a difference in people’s lives and American politics. It’s 
                        simple for me: I volunteer and get involved in politics, because it’s one of the few 
                        ways citizens can make a real change. I am aware of how much my voice and my vote 
                        matters for me and for people who look like me. I'd like to encourage young people 
                        to get involved with Vacay for Democracy because it's an experience that you won't 
                        regret!
                    </TestimonialCardStory>
                </TestimonialCard>
                <TestimonialCard>
                    <TestimonialCardName>
                        Tara, 36
                    </TestimonialCardName>
                    <TestimonialCardStory>
                        I volunteered for Vacay for Democracy, because I’d never been involved with civic action
                        work and it sounded really fun to be able to travel with a group of fun (hilarious, 
                        creative, kind, compassionate, the list goes on) and progressive people. I wanted to 
                        say yes to something that was outside of my comfort zone, and so I could have a hand 
                        in making a difference. <br/>
                        <br/>
                        My experience showed me that talking to neighbors, building connection and supporting 
                        communities can cause change. The work wasn't as hard or as scary as I thought prior 
                        to trying it, but it sure is impactful. I am so proud of the work our team did in 
                        Virginia! <br/>
                        <br/>
                        Building relationships with our team was my favorite part of the trip: It's all about 
                        the people. That's what makes the sense of urgency real, and the impact real. Although 
                        we worked hard, we never lost sight of having fun together and supporting each other. 
                        This was such a special group. <br/>
                        <br/>
                        Volunteering helped me build my awareness around certain issues I knew little to nothing 
                        about. Young people have such unique and novel ideas for what we want our future look 
                        like, it's important we hone our skills and and get involved so that we can be apart 
                        of creating change! 
                    </TestimonialCardStory>
                </TestimonialCard>
            </TestimonialsContainer>
        </TestimonialsPageContainer>
    </Layout>
)

export default TestimonialsPage