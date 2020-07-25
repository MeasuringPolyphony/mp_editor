import { Subject } from 'rxjs';

export const scoreDoc = new Subject<XMLDocument>();

class Wrapper {
  meiDoc: XMLDocument;
}

export const wrapper = new Wrapper();
