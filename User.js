class User {

    constructor(firstName, lastName, books, pets) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.books = books;
        this.pets = pets;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    addPet(petName) {
        this.pets.push(petName);
    }

    countPets() {
        return this.pets.length;
    }

    addBook(name, author) {
        this.books.push({name: name, author: author});
    }

    getBookNames() {
        const bookNames = [];

        for (const book of this.books) {
            bookNames.push(book.name);
        }

        return bookNames;
    }
}

export default User;