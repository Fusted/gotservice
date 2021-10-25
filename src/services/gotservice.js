export default class GotService{
    constructor(){
        this._apiBase = 'https://www.anapioficeandfire.com/api'
    }

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`)
        if (!res.ok){
            throw new Error (`Could not fetch ${url}`)
        }
        return await res.json()
    }

    getAllCharacters = async () =>{
        const ans = await this.getResource('/characters?page=5')
        return ans.map(this.__transformChar)
    }

    async getCharacter(id){
        const ans = await this.getResource(`/characters/${id}`)
        const character = this.__transformChar(ans)
        
        for (let par in character){
            if (!character[par]){
                
                character[par] = 'There is no info about it'
            }
        }
        
        return character
    }


    getAllBooks = async () =>  {
        return await this.getResource(`/books/`)
    }
    
    getBook(id) {
        return this.getResource(`/books/${id}/`)
    }
    
    
    getAllHouses() {
        return this.getResource(`/houses/`)
    }
    
    getHouse(id) {
        return this.getResource(`/houses/${id}/`)
    }


    __transformChar(char) {
        return {
            name: char.name,
            gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture
        }
    }
}




