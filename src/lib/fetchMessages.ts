import pool from './db';

export async function fetchMessages(name: string, phoneNumber: string) {
  const instanceQuery = await pool.query('SELECT id FROM Instance WHERE name = $1', [name]);

  if (instanceQuery.rows.length === 0) {
    return null; // Instance não encontrada
  }

  const instanceId = instanceQuery.rows[0].id;

  const messagesQuery = await pool.query(
    `SELECT * FROM "Message"
     WHERE "instanceId" = $1 AND key::jsonb->>'remoteJid' = $2
     ORDER BY "messageTimestamp" DESC
     LIMIT 1000`,
    [instanceId, `${phoneNumber}@s.whatsapp.net`]
  );

  return messagesQuery.rows.map(row => ({
    ...row,
    key: JSON.parse(row.key),
    message: JSON.parse(row.message),
    messageTimestamp: new Date(row.messageTimestamp * 1000).toLocaleString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })
  }));
}
