// ES6
import process from 'node:process';
import fs from 'node:fs';
import path from 'node:path';

// Ruta al archivo db.json
let dbPath;
try {
  // Intentar ruta relativa para desarrollo local
  dbPath = path.resolve(process.cwd(), 'src/db/db.json');
  if (!fs.existsSync(dbPath)) {
    // Ruta alternativa para el entorno de Azure
    dbPath = path.resolve(process.cwd(), '../src/db/db.json');
  }
} catch (error) {
  console.error('Error encontrando db.json:', error);
}

// Cargar datos desde db.json
let data;
try {
  const rawdata = fs.readFileSync(dbPath);
  data = JSON.parse(rawdata);
} catch (error) {
  console.error('Error cargando db.json:', error);
  // Datos de fallback en caso de error
  data = {
    categories: [],
    products: []
  };
}

export default data; 