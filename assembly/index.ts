import { Context, PersistentVector } from "near-sdk-as";
import { Writing } from "./models";

@nearBindgen
export class Contract {
  writingList: PersistentVector<Writing> = new PersistentVector<Writing>("w");

  @mutateState()
  writeSomething(message: string, toWho: string): Writing {
    let sender: string = Context.sender;

    let writing: Writing = new Writing(message, sender, toWho);

    this.writingList.push(writing);

    return writing;
  }

  //writeSomething
  //listWriting
}
