import React from "react";
import * as S from "./styles";

interface TableProps {
  headers: string[];
  emptyStateMessage: string;
  data: any[];
}

export function Table({ headers, data, emptyStateMessage }: TableProps) {
  const displayHeaders = headers.map((header: string) => (
    <th key={header}>{header}</th>
  ));

  function generateRows() {
    return data.map(mapDataToRow);
  }

  function displayData() {
    const rows = generateRows();
    return !data.length ? EmptyState(emptyStateMessage) : rows;
  }

  return (
    <S.Table>
      <S.Headers>{displayHeaders}</S.Headers>
      {displayData()}
    </S.Table>
  );
}

function mapDataToRow(data: any) {
  const values = Object.values(data);
  return (
    <tr>
      {values.map((value: any) => (
        <S.Value key={value}>{value}</S.Value>
      ))}
    </tr>
  );
}

function EmptyState(message: string) {
  return <S.Message>{message}</S.Message>;
}
