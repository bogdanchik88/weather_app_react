import { makeAutoObservable } from "mobx"

class cityStore {

    constructor() {
        makeAutoObservable(this)
    }    

    city = localStorage.getItem('city' || 'Москва')

    setCity = (newCity) => {
        this.city = newCity
        localStorage.setItem('city', newCity)
    }
}

export const cityStore = new cityStore()