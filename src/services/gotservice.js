export default class GotService{
    
    static _apiBase = 'https://www.anapioficeandfire.com/api'
    

    static async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok){
            throw new Error (`Could not fetch ${url}`)
        }
        return await res.json()
    }

    static getAllCharacters = async () =>{
        const ans = await this.getResource('/characters?page=5')
        return ans.map(this.__transformChar)
    }
    static async getCharacter(id) {
        const ans = await this.getResource(`/characters/${id}`)
        const character = this.__transformChar(ans)
        
        this.checkForInfo(character)
        
        
        return character
    }
    

    static getAllBooks = async () =>  {
        
        return await this.getResource(`/books/`)
    }
    
    static async getBook(id) {
        const book = await this.getResource(`/books/${id}/`)

        this.checkForInfo(book)

        return book
    }
    
    
    static getAllHouses() {
        return this.getResource(`/houses/`)
    }
    
    static async getHouse(id) {
        const house = await this.getResource(`/houses/${id}/`)
        
        this.checkForInfo(house)

        return house
    }

    static checkForInfo(item){
        for (let par in item){
            if (!item[par]){ 
                item[par] = 'There is no info about it'
            }
        }
    }

    static __transformChar(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}




