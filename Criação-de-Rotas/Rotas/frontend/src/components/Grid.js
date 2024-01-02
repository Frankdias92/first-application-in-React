import React from "react";
import styled from "styled-components";
import axios from "axios";
import { PencilSimple, TrashSimple } from "@phosphor-icons/react";

const Table = styled.table`
  width: 90%;
  background-color: #313329;
  color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 6px 2px #0001;
  border-radius: 6px;
  margin: 20px auto;
  word-break: break-all;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody``;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: start;
  border-bottom: inset 5px #fff;
  padding-bottom: 5px;

  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
export const Td = styled.td`
  padding-top: 15px;
  border-bottom: .7px solid #eee;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
  @media (max-width: 500px) {
    ${(props) => props.onlyWeb && "display: none"}
  }
`;
const ButtonRed = styled.button`
  margin: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #E74C3C;
`;
const ButtonGreen = styled.button`
  margin: auto;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: #007458;
`;

const DivBtn = styled.div`
display: flex;
gap: 10px;
width: auto;
margin-left: 20px;
`;

const Grid = ({ users, getUsers }) => {

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3500/cliente/${id}`);
      getUsers();
    } catch (error) {
      console.error('erro ao deletar', error);
    }
  }

  const handlePut = async (id, newData) => {
    try {
      await axios.put(`http://localhost:3500/cliente/${id}`, newData);
      getUsers();
    } catch (error) {
      console.error('erro ao atualizar', error);
    }
  }
  const newData = {
    nome: 'NewName',
    email: 'newEmail@email.com',
    telefone: '2023 - 2024'
  }
  
  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Nome</Th>
          <Th>Email</Th>
          <Th onlyWeb>Fone</Th>
        </Tr>
      </Thead>

      <Tbody>
        {users.map((item, i) => (          
          <Tr key={i}>
            <Td alignCenter width="5%">
              {item.id}
            </Td>
            <Td width="30%">
              {item.nome}
            </Td>
            <Td width="30%">
              {item.email}
            </Td>
            <Td width="20%" onlyWeb>
              {item.telefone}
            </Td>            
            <td width="10%">
            <DivBtn>
              <ButtonRed onClick={() => handleDelete(item.id)}>
                <TrashSimple />
              </ButtonRed>

              <ButtonGreen onClick={() => handlePut(item.id, newData)}>
                <PencilSimple />
              </ButtonGreen>
            </DivBtn>
            </td>
            
            
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Grid;