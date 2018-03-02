import * as ipc from 'node-ipc';

ipc.config.silent = true;
ipc.config.stopRetrying = true;

export class Client {
  public static sendMessage() {
    const [node, script, ...params] = process.argv;

    ipc.connectTo('tfNode', () => {
      ipc.of.tfNode.on('connect', () => {
        ipc.of.tfNode.emit('tf', params);
        ipc.disconnect('tfNode');
      });
    });
  }
}
