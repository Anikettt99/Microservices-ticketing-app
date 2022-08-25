import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  // ? means _client is not defined for some period of tym
  private _client?: Stan;

  /* getter (it is NOT a function) it will define client property 
     on the instance
  */
  get client_get() {
    if (!this._client) {
      throw new Error("Cannot access NATS client before connecting");
    }

    return this._client;
  }

  connect(clusterId: string, clientId: string, url: string) {
    this._client = nats.connect(clusterId, clientId, { url });

    /* using getter in below function coz typescript assuming
      that maybe this._client got undefined after line 19 
      (which is very unlikely to happened but still...)
      so in the getter we are checking if it's not defined then 
      throw error..so typescript has now no problem
   */

    return new Promise<void>((resolve, reject) => {
      this.client_get.on("connect", () => {
        console.log("Connected to NATS");
        resolve();
      });

      this.client_get.on("error", (err) => {
        reject(err);
      });
    });
  }
}

/*

we are exporting this as a instance of "NatsWrapper" coz if we one tym initialize
it from index file..then this nats client will be made and is available for whole
service (like a mongoose)...we just need to import this instance in any file where
we need this client
*/
export const natsWrapper = new NatsWrapper();
