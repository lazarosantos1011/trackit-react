const API_URL = 'http://localhost:5000/equipamentos';

export async function getEquipamentos() {
  const res = await fetch(API_URL);
  return await res.json();
}

export async function saveEquipamento(equipamento) {
  if (equipamento.id) {
    await fetch(`${API_URL}/${equipamento.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(equipamento)
    });
  } else {
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(equipamento)
    });
  }
}

export async function deleteEquipamento(id) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
}