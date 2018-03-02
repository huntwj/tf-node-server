import * as ipc from 'node-ipc';

export class Server {
  public static run() {
    ipc.config.silent = true;
    ipc.config.id = 'tfNode';

    ipc.serve(() => {
      Server.log('Node server started.');
      ipc.server.on(
        'tf',
        (data: any, socket: any) => {
          const arrayStr =
            (data as string[])
              .map((str) => `'${str}'`)
              .join(', ');

          Server.log(`[${arrayStr}]`);
        }
      );
    });
    ipc.server.start();
  }

  private static log = (message: string) => {
    console.log(`/echo ${message}`);
  }
}
