import { useEffect, useState } from 'react';

const ModalEquipamento = ({ open, onClose, onSave, equipamento }) => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [status, setStatus] = useState('Disponível');

  useEffect(() => {
    if (equipamento) {
      setNome(equipamento.nome);
      setTipo(equipamento.tipo);
      setStatus(equipamento.status);
    } else {
      setNome('');
      setTipo('');
      setStatus('Disponível');
    }
  }, [equipamento, open]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id: equipamento ? equipamento.id : undefined,
      nome,
      tipo,
      status
    });
  };

  if (!open) return null;

  return (
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal_content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{equipamento ? 'Editar Equipamento' : 'Adicionar Equipamento'}</h2>
        <form id="equipment_form" onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" required value={nome} onChange={e => setNome(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="tipo">Tipo:</label>
            <input type="text" id="tipo" required value={tipo} onChange={e => setTipo(e.target.value)} />
          </div>
          <div className="input">
            <label htmlFor="status">Status:</label>
            <select id="status" required value={status} onChange={e => setStatus(e.target.value)}>
              <option value="Disponível">Disponível</option>
              <option value="Em Manutenção">Em Manutenção</option>
              <option value="Emprestado">Emprestado</option>
            </select>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </div>
    </div>
  );
};

export default ModalEquipamento;