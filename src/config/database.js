import { openDatabase } from 'react-native-sqlite-storage';
import Config from './environment';

const db = openDatabase(
  {
    name: 'AppDatabase.db',
    location: 'default',
    createFromLocation: Config.IS_MOCK_DATA ? '~www/mock.db' : null,
  },
  () => console.log('Database connected'),
  (error) => console.error('Database error', error)
);

// Database tables schema
const SCHEMA = {
  USERS: `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`,
  // Add other tables
};

// Initialize database schema
const initializeDatabase = async () => {
  try {
    await db.transaction(async (tx) => {
      for (const [table, schema] of Object.entries(SCHEMA)) {
        await tx.executeSql(schema);
      }
    });
    console.log('Database initialized');
  } catch (error) {
    console.error('Database initialization failed', error);
  }
};

export { db, initializeDatabase };