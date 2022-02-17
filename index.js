import express from 'express';
import StatsD from 'hot-shots';

(async () => {
  const client = new StatsD({
    port: 8125,
    host: 'dd-agent',
    globalTags: { env: 'local' },
    errorHandler: (err) => {
      console.log(err);
    },
  });
  client.increment('test.app.started');
  const app = express();
  app.get('/', (req, res) => {
    const tags = ['app:test', 'version:v1'];
    const rvalue = Math.random() * 10;

    client.increment('test.app.request', 1, 1, tags);
    client.increment('test.app.count', Math.ceil(Math.random() * 10), 1, tags);
    // client.count('test.app.count', 1, 1, tags);
    client.distribution('test.app.latency', rvalue, 1, tags);
    client.gauge('test.app.gauge', rvalue, 1, tags);
    client.histogram('test.app.histogram', rvalue, 1, tags);

    res.json({ ts: new Date().toISOString() });
  });
  app.listen(3000, () => {
    console.log('App running at localhost:3000');
  });
})();
