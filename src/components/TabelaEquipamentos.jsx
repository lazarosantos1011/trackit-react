import { useState } from 'react';

const EquipmentTable = ({ equipamentos, onEdit, onDelete }) => {
  const [sortCol, setSortCol] = useState('id');
  const [asc, setAsc] = useState(true);

  const sorted = [...equipamentos].sort((a, b) => {
    if (a[sortCol] < b[sortCol]) return asc ? -1 : 1;
    if (a[sortCol] > b[sortCol]) return asc ? 1 : -1;
    return 0;
  });

  const handleSort = (col) => {
    if (sortCol === col) setAsc(!asc);
    else { setSortCol(col); setAsc(true); }
  };

  return (
    <table id="equipment_table">
      <thead>
        <tr>
          <th onClick={() => handleSort('id')}>ID</th>
          <th onClick={() => handleSort('nome')}>Nome</th>
          <th onClick={() => handleSort('tipo')}>Tipo</th>
          <th onClick={() => handleSort('status')}>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {sorted.map(e => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.nome}</td>
            <td>{e.tipo}</td>
            <td>{e.status}</td>
            <td>
              <button className="edit" onClick={() => onEdit(e)}>Editar</button>
              <button className="delete" onClick={() => onDelete(e.id)}>Excluir</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EquipmentTable;