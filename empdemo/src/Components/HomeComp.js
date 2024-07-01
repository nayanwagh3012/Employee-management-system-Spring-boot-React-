import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeComp = () => {
  return (
    <div>
      {/* Replace the background style with Bootstrap class */}
      <div
        className="bg-dark"
        style={{
          backgroundImage: "url('https://global-uploads.webflow.com/625d567276661e857102867d/63cd55af57b94e9886e36427_A%20Beginners%20Guide%20to%20Employee%20Management%20System.png')",
          backgroundSize: 'cover',
          minHeight: "50vh",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          marginLeft:'-90px',
          marginRight:'-90px',
          marginTop:"-40px"
        }}
      >
        {/* Image or any co
        ntent in the main container */}
        { /*<img src='' alt="Employee" style={{ width: '200px', height: '200px' }} /> */}
      </div>
      <Container fluid="lg">
      <Row>
  <Col xs={12} md={6}>
    {/* Left side content */}
    <div style={{ padding: "1px", marginTop: "30px", width: "100%", textAlign: "left" }}>
      <h5 style={{ color: "#1F51FF" }}>OUR MISSION</h5>
      <p>
        Our mission is to empower businesses to optimize their workforce management processes. We understand the challenges that businesses face in managing employees and their data, and we're committed to providing comprehensive solutions that streamline operations and enhance productivity.
      </p>
      <Button variant="primary" style={{ marginTop: "10px" }}>Get Started</Button>
    </div>
  </Col>
  <Col xs={12} md={6}>
    {/* Right side content */}
    <div style={{ padding: "1px", marginTop: "30px", width: "100%", textAlign: "left" }}>
      <h5 style={{ color: "#1F51FF" }}>LET'S BEGIN</h5>
      <p>
        Join thousands of businesses worldwide who have chosen us as their trusted partner for employee management. Take the first step towards optimizing your workforce management processes by signing up for our Employee Management System today!
      </p>
      <Button variant="primary" style={{ marginTop: "10px" }}>Get Started</Button>
    </div>
  </Col>
</Row>

      </Container>
    </div>
  );
};

export default HomeComp;