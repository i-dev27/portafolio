import React from "react";
import { Avatar } from "@material-ui/core";
import { Grid, Container } from "@material-ui/core";
import styled, { keyframes } from "styled-components";
import { bounceIn } from "react-animations";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import BackupIcon from "@material-ui/icons/Backup";

const Bounce = styled.div`
  animation: 5s ${keyframes`${bounceIn}`} infinite;
`;

export default function Projects() {
  return (
    <div className="projects-area">
      <Container fixed>
        <Bounce>
          <h1 className="projects-title">
            "My Name is Irving R. and I am Software Developer <br /> I've been
            in this field for 5 months. <br /> I am also a creative content
            marketing director "
          </h1>
        </Bounce>

        <Grid spacing={1} container justify="flex-end" alignItems="center">
          <Grid item xs={1}>
            <Bounce>
              <Avatar alt="Irving Morales" src="./images/avatar.jpg" />
            </Bounce>
          </Grid>
        </Grid>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<BackupIcon />}
          >
            <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2010 - 2011"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Art Director</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>
              Creative Direction, User Experience, Visual Design, SEO, Online
              Marketing
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2008 - 2010"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Los Angeles, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2006 - 2008"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">Web Designer</h3>
            <h4 className="vertical-timeline-element-subtitle">
              San Francisco, CA
            </h4>
            <p>User Experience, Visual Design</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </div>
  );
}
