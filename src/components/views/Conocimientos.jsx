import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import { DiJavascript, DiMongodb, DiMysql } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { TbApi } from "react-icons/tb";

const Conocimientos = () => {
  return (
    <Container className="py-4" id="conocimientos">
      <h2 data-aos="fade-up" className="text-center text-light titulo mb-3">
        Conocimientos
      </h2>
      <Row className="text-light d-flex justify-content-center">
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaHtml5 className="icono text-danger"></FaHtml5>
            <h4>HTML</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaCss3Alt className="icono text-primary"></FaCss3Alt>
            <h4>CSS</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <DiJavascript className="icono text-warning"></DiJavascript>
            <h4>JAVASCRIPT</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaReact className="icono text-info"></FaReact>
            <h4>REACT</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <SiRedux className="icono text-redux" />
            <h4>REDUX</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <img
              src="https://repository-images.githubusercontent.com/180328715/fca49300-e7f1-11ea-9f51-cfd949b31560"
              alt=""
              className="icono w-50"
            />
            <h4>ZUSTAND</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaNodeJs className="icono text-success"></FaNodeJs>
            <h4>NODE JS</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <DiMysql className="icono text-secondary"></DiMysql>
            <h4>MYSQL</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <DiMongodb className="icono text-success"></DiMongodb>
            <h4>MONGO DB</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaGithub className="icono text-black bg-light rounded-circle"></FaGithub>
            <h4>GITHUB</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <FaBootstrap className="icono text-redux"></FaBootstrap>
            <h4>Bootstrap</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <SiTailwindcss className="icono text-primary"></SiTailwindcss>
            <h4>Tailwind</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <DiScrum className="icono text-info"></DiScrum>
            <h4>Metodologias Ágiles (SCRUM)</h4>
          </article>
        </Col>
        <Col xs={5} md={3} className="text-center">
          <article data-aos="fade-up" className=" my-3 p-2">
            <TbApi className="icono text-danger"></TbApi>
            <h4>Creación y consumo de apis</h4>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default Conocimientos;
