import React, { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  border-bottom: solid;
  padding-bottom: 10px;
`;

const Input = styled.input`
  width: 100vh;
  height: 50px;
  background-color: lightblue;
  border: none;
  border-radius: 10px;
  font-size: medium;
  margin-bottom: 10px; // Add margin for spacing
`;

const Button = styled.button`
  margin: 15px 0px;
  padding: 10px;
  background-color: #5555e2;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  color: white;
`;

const Label = styled.p`
  font-size: large;
  font-weight: bold;
`;

function AddEntry() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: '',
    report: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const dataToSend = {
      title: data.title,
      report: data.report,
    };
    // Handle form submission directly
    fetch('http://localhost:8081/report/add', {
      method: 'POST',
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(dataToSend),
    })
      .then(() => {
        console.log('New entry added');
        // Optionally, you can navigate to another page after successful submission
        navigate('/'); // Change '/' to the desired route
      })
      .catch((error) => {
        console.error('Error adding new entry:', error);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Add Entry</Title>
        <Label>Title</Label>
        <Input
          type="text"
          title="title"
          id="title"
          value={data.title}
          placeholder="Enter title"
          onChange={(e) => setData({ ...data, title: e.target.value })}
        />

        <Label>Entry</Label>
        <Input
          type="text"
          name="report"
          id="report"
          value={data.report}
          placeholder="Enter entry"
          onChange={(e) => setData({ ...data, report: e.target.value })}
        />

        <Button type="submit">Create</Button>
      </form>
    </Container>
  );
}

export default AddEntry;
