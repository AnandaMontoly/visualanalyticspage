import './App.css';
import ControlledAccordions from './ControlledAccordians';
import Grid from '@material-ui/core/Grid';
import { Helmet } from 'react-helmet'
import AboutUs from "./projectcard.js";


function App() {
  return (
    <div className="App">
    <Helmet>
      <title>{ "Visual Analytics" }</title>
    </Helmet>

    <Grid container spacing={1}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        item xs = {1}
      >
      </Grid>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        item xs = {10}
      >
        <h1>About Me</h1>
        <p>
        Hi! My name is Ananda (ah-NAWN-dah or AH-nun-duh) and I'm a junior year Computer Sciences
        and Data Science double major at Smith. I'm also a TA for visual analytics.
        <br /><br />
        <h1>My Skill Set</h1>
        Outside of classes, I have a good amount of experience with full stack web development and designing
        data visualization tools. I regularly work in R, Python, HTML/CSS, JavaScript/React/Node, and with
        SQL and NoSQL databases. I also have experience deploying fullstack apps to the cloud (usually Google cloud).
        If you'd like help with any of those topics, feel free to come to office hours and I can help out. Even if it isn't related
        to one of those topics, I might still know it or can take my best crack at it.
        <br /><br />
        <b>What are those topics?</b>
        <br /><br />
        <ControlledAccordions />
        <br />
        <h1>My Hours</h1>
        I'm available on Mondays and Fridays from 3-5 PM ET. If you need to ask me a non-programming question off hours,
        you can reach me at <a href="mailto:amontoly@smith.edu">amontoly@smith.edu</a> or more quickly at freshfriedsalad#4792 on Discord. {/* If you have questions about class material outside of hours, I'm usually
        on the Discord server and can answer questions in the questions channel if I have time. */}
        <br /><br />
        <h1>My Previous Work</h1>
        I designed <a href="https://bottlemessage-299107.uc.r.appspot.com/">this data visualization</a> for Jordan's research lab using NetworkX for my analysis,
        VisJs to create the network visualization on each page, Plotly.js for the other visualizations, and a Flask RESTful API on the backend all deployed to Google Cloud.
        You can also see some of hackathon projects I've worked on on my <a href="https://www.youtube.com/channel/UCiZGlwN8JGogSA1JXaodL_Q">YouTube channel</a>. For any of you that love knitting, <a href="https://knitwits.ue.r.appspot.com/">this website</a> is a pattern sharing tool we designed using many of the same principles that you'd use for an interactive data visualization website.
        It was built using React, a Flask API, and Firebase.
        </p>


      </Grid>
    </Grid>
    </div>
  );
}

export default App;
