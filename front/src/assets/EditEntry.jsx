import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

function EditEntry() {
  const { id } = useParams();
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
    fetch(`http://localhost:8081/report/edit/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dataToSend),
    })
      .then(() => {
        console.log('Entry updated');
        navigate('/');
      })
      .catch((error) => {
        console.error('Error updating entry:', error);
      });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Title>Edit Entry</Title>
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

        <Button type="submit">Update</Button>
      </form>
    </Container>
  );
}

export default EditEntry;
