import * as ipc from 'node-ipc';

export class Server {
  public static run() {
    ipc.config.silent = true;
    ipc.config.id = 'tfNode';

    ipc.serve(() => {
      Server.log('Node server started.');
      ipc.server.on(
        'tf',
        Server.handleMessage,
      );
    });
    ipc.server.start();
  }

  private static handleMessage = (message: string[]) => {
    if (message && message.length === 1 && message[0] === 'quit') {
      Server.log("Node server stopped.");
      ipc.server.stop();
      return;
    }
    const arrayStr = message
        .map((str) => `'${str}'`)
        .join(', ');

    Server.log(`[${arrayStr}]`);
  }

  private static log = (message: string) => {
    console.log(`/echo ${message}`);
  }
}
