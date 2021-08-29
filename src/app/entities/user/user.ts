import * as crypto from "crypto";

class User {
  constructor(tier, color) {
    this.tier = tier;
    this.color = color;
    this.hash = crypto.randomBytes(20).toString('hex');
  }
}
