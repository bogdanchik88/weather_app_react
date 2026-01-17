import { makeAutoObservable } from "mobx"

class CityStore {

    constructor() {
        makeAutoObservable(this)
    }    

    inputCity = localStorage.getItem('city') ?? 'Москва'
    city = this.inputCity

    setInputCity = (value) => {
        this.inputCity = value
    }

    submitCity = () => {
        this.city = this.inputCity
        localStorage.setItem('city', this.city)
    }
}

export const cityStore = new CityStore()