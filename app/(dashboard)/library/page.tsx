"use client"
export default function UserLibrary() {
  return (
    <div style={{ padding: '25px', backgroundColor: '#000', minHeight: '100vh' }}>
      <h2 style={{ fontSize: '22px', fontWeight: '900', fontStyle: 'italic', marginBottom: '10px' }}>MI_BÓVEDA</h2>
      <p style={{ color: '#444', fontSize: '10px', fontWeight: 'bold', marginBottom: '30px' }}>CONTENIDO_PRIVADO_Y_ENCRIPTADO</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        {/* Aquí la base de datos cargará los archivos del usuario logueado */}
        <div style={emptyCard}>SIN_DATOS_01</div>
        <div style={emptyCard}>SIN_DATOS_02</div>
      </div>
    </div>
  );
}
const emptyCard = { height: '180px', backgroundColor: '#050505', border: '1px solid #111', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#222', fontSize: '9px', fontWeight: 'bold' };
