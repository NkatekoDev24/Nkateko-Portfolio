import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Projects.css';

const projectData = [
    {
        title: 'Good Money Habits App',
        description: 'Financial education for small/medium businesses',
        imageUrl: '/assets/gmh_logo.png',
        githubUrl: 'https://github.com/NkatekoDev24/Good-Money-Habits',
    },
    {
        title: 'Project 2',
        description: 'Description for project 2.',
        imageUrl: '/assets/placeholder2.png', // Replace with actual image URL
        githubUrl: 'https://github.com/your-username/project2',
    },
    // Add more projects as needed
];

function Projects() {
    return (
        <section id="projects" className="projects-section">
            <Container>
                <h2>My Projects</h2>
                <Row>
                    {projectData.map((project, index) => (
                        <Col md={4} className="mb-4" key={index}>
                            <Card>
                                <Card.Img variant="top" src={project.imageUrl} alt={project.title} />
                                <Card.Body>
                                    <Card.Title>{project.title}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <Button variant="primary" href={project.githubUrl} target="_blank">
                                        GitHub
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}

export default Projects;