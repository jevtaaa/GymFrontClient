export class Coach {
    constructor(private coach_id: number, private username?: string, private name?: string, private surname?: string, private email?: string, private bio?: string) {}

    getId() {
        return this.coach_id;
    }        
    getUsername() {
        return this.username;
    }
    getName() {
        return this.name;
    }
    getSurname() {
        return this.surname;
    }
    getEmail() {
        return this.email;
    }
    getBio() {
        return this.bio;
    }

    setId(id: number) {
        this.coach_id = id;
    }        
    setUsername(username: string) {
        this.username = username;
    }
    setName(name: string) {
        this.name = name;
    }
    setSurname(surname: string) {
        this.surname = surname;
    }
    setEmail(email: string) {
        this.email = email;
    }
    setBio(bio: string) {
        this.bio = bio;
    }
}