export default class Section {
    #id;
  constructor(title, subtitle = "", date = "", description = "", bullet = []) {
    this.#id = crypto.randomUUID();
    this.title = title;
    this.subtitle = subtitle;
    this.date = date;
    this.description = description;
    this.bullet = bullet;
  }

  get id() {
    return this.#id;
  }
}
