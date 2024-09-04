import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;
  color: #333;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;

  td,
  th {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  thead {
    background-color: #f1f1f1;
  }

  th {
    font-weight: 600;
    background-color: #a39e90;
    color: #fff;
  }

  tbody tr {
    transition: background-color 200ms ease;
  }

  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tbody tr:hover {
    background-color: #e9ecef;
  }

  tbody td {
    border-bottom: 1px solid #e9ecef;
  }

  input[type="text"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;
