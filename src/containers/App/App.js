import React, {Component} from 'react';
import './App.scss';
import Nav from '../../components/Nav/Nav';
import Section from '../../components/Section/Section';
import About from '../../components/About/About';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';
import Footer from '../../components/Footer/Footer';
import Button from '../../components/UI/Button/Button';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import sections from '../../config/sections.config';
import {personal, course} from '../../config/projects.config';
import {experience} from '../../config/skills.config';
import axiosGit from '../../axios-git';

const links = [
  {
    href: "#",
    name: "&copy; 2018 Gabor Zay"
  },
  {
    href: "https://www.linkedin.com/in/gaborzay/",
    name: "LinkedIn",
    icon: <FaLinkedinIn/>
  },
  {
    href: "https://github.com/gaborzay/",
    name: "Github",
    icon: <FaGithub/>
  },
];
const buttons = links.map(button => {
  if (button.icon) {
    return (<Button text={button.name} href={button.href} icon={button.icon}/>);
  }
  return false;
});

class App extends Component {
  state = {
    personalProjects: [],
    courseProjects: []
  };

  getProjects(projects, stateProjects) {
    projects.forEach((project => {
      if (project.git) {
        axiosGit.get(project.git)
          .then(response => {
            const updateArray = [...this.state[stateProjects]];
            const responseData = {...response.data, tech: project.technologies};
            updateArray.push(responseData);
            this.setState({[stateProjects]: [...updateArray]});
          })
          .catch(error => console.log(error));
      }
    }));
  }

  componentWillMount() {
    this.getProjects(personal, 'personalProjects');
    this.getProjects(course, 'courseProjects');
  };

  render() {
    return (
      <div className="App">
        <Nav sections={sections}/>

        <main className="Main">
          <Section
            sectionId={sections.about.id}
            classes={["section__about"]}
            heading={sections.about.heading}>

            <About>
              {buttons}
            </About>
          </Section>

          <Section
            sectionId={sections.portfolio.id}
            classes={["section__portfolio"]}
            heading={sections.portfolio.heading}>

            <Projects
              title="Personal Projects"
              projects={this.state.personalProjects}
            />
            <Projects
              title="Course Projects"
              projects={this.state.courseProjects}
            />
          </Section>

          <Section
            sectionId={sections.skills.id}
            classes={["section__skills"]}
            heading={sections.skills.heading}>

            <Skills
              title="Experience"
              skills={experience}
            />
          </Section>
        </main>

        <Footer links={links}/>
      </div>
    );
  }
}

export default App;
