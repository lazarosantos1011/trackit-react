import { useEffect, useState } from 'react';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import TabelaEquipamentos from './TabelaEquipamentos';
import ModalEquipamento from './ModalEquipamento';
import Graficos from './Graficos';
import { getEquipamentos, saveEquipamento, deleteEquipamento } from '../services/api';

const Dashboard = () => {
  const [equipamentos, setEquipamentos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editEquip, setEditEquip] = useState(null);
  const [search, setSearch] = useState('');

  const fetchEquipamentos = async () => {
    const data = await getEquipamentos();
    setEquipamentos(data);
  };

  useEffect(() => { fetchEquipamentos(); }, []);

  const handleAdd = () => {
    setEditEquip(null);
    setModalOpen(true);
  };

  const handleEdit = (equip) => {
    setEditEquip(equip);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este equipamento?')) {
      await deleteEquipamento(id);
      fetchEquipamentos();
    }
  };

  const handleSave = async (equip) => {
    await saveEquipamento(equip);
    setModalOpen(false);
    fetchEquipamentos();
  };

  const handleLogout = () => {
    alert('Você saiu com sucesso!');
    window.location.href = '/';
  };

  const filtered = equipamentos.filter(e =>
    e.nome.toLowerCase().includes(search.toLowerCase()) ||
    e.tipo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Cabecalho onLogout={handleLogout} showLogout />
      <main id="dashboard_container">
        <section className="dashboard_metrics">
          <h2>Resumo</h2>
          <Graficos equipamentos={equipamentos} />
        </section>
        <section className="dashboard_content">
          <h2>Gerenciamento de Equipamentos</h2>
          <div className="actions">
            <button id="add_equipment_btn" onClick={handleAdd}>Adicionar Equipamento</button>
            <input type="text" id="search_input" placeholder="Buscar por nome ou tipo..."
              value={search} onChange={e => setSearch(e.target.value)} />
          </div>
          <TabelaEquipamentos
            equipamentos={filtered}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </section>
        <ModalEquipamento
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
          equipamento={editEquip}
        />
      </main>
      <Rodape />
    </>
  );
};

export default Dashboard;