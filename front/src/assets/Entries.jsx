import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  padding: 0px 20px;
`
const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 15px black;
  border-radius: 10px;
  margin: 10px;
`
const Title = styled.h2`
  text-align: center;
  border-bottom: solid;
  padding-bottom: 10px;
`
const Add = styled.button`
  background-color: green;
  border: none;
  margin: auto;
  cursor: pointer;
  font-weight: bold;
`
const LinkLabel = styled(Link)`
  padding: 20px 10px;
  background-color: green;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin: auto;
  margin-bottom: 10px;
`
const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`
const Edit = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px;
  background-color: lightgray;
  margin: 0 5px 5px 0;
  cursor: pointer;
  :hover{
    background-color: #4040e1;
    //transition: 0.5s step-start;
  }

`
const Delete = styled.button`
  border-radius: 20px;
  border: none;
  padding: 10px;
  background-color: lightgray;
  cursor: pointer;
  :hover{
    background-color: red;
  }
`
const TableContainer = styled.div`
  height: 62vh;
  overflow-x: auto;
`
const Image = styled.img`
  max-height: 50vh;
  aspect-ratio: 16/9;
  width: auto; /* Ensure the image takes up the full width of its container */
  max-width: 100%; /* Limit the image width to its container's width */
  height: auto; /* Allow the height to adjust proportionally based on the aspect ratio */
  border-radius: 50%;
`

function Mylist() {
  const [data, setData] = useState([]);
  const navigate = useNavigate('');
  

  useEffect(() => {
    fetch('http://localhost:8081/report/show')
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8081/report/delete/${id}`) 
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Wrapper>
        <Title>Entry List</Title>
        <LinkLabel to="/creat"><Add>Add Entry</Add></LinkLabel>
        <TableContainer>
          <Table>
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>Entry</th>
                <th>date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((report, index) => (
                <tr key={index}>
                  <td>{report.id}</td>
                  <td>{report.title}</td>
                  <td>{report.report}</td>
                  <td>{new Date(report.date).toLocaleDateString()}</td>
                  <td>
                  <Edit onClick={()=>{
                    navigate('/edit/'+report.id)
                  }}>Edit</Edit>
                    <Delete onClick={() => handleDelete(report.id)}>Delete</Delete>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </TableContainer>
      </Wrapper>
    </Container>
  );
}

export default Mylist;
