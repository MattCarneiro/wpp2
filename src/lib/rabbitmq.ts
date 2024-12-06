import amqp from 'amqplib';

export async function setupRabbitMQ() {
  try {
    const connection = await amqp.connect(process.env.RABBITMQ_URL!);
    const channel = await connection.createChannel();
    
    await channel.prefetch(parseInt(process.env.RABBITMQ_PREFETCH || '10'));
    
    // Declara a fila como do tipo 'quorum'
    await channel.assertQueue('whatsapp_messages', { 
      durable: true, 
      arguments: { 'x-queue-type': 'quorum' } 
    });
    
    channel.consume('whatsapp_messages', async (msg) => {
      if (msg) {
        console.log('Received message:', msg.content.toString());
        channel.ack(msg);
      }
    });

    console.log('RabbitMQ setup completed.');
  } catch (error) {
    console.error('Error setting up RabbitMQ:', error);
    process.exit(1); // Encerra a aplicação em caso de erro crítico
  }
}
