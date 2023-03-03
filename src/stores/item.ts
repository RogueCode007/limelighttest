import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import ImagePath from '@/assets/images/blackshirt.jpg'
import type { ItemDto } from './storeTypes'
export const useItemStore = defineStore('item', () => {
    const items = ref<ItemDto[]>([
        {   
            id: 23,
            type : 'Shirt',
            name: "Essentials Men's Short-Sleeve Crewneck T-shirt ",
            ratings: '4.9',
            no_of_ratings: '2.3k+',
            quantity_sold: '2.9k+',
            price: '$32.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Goka',
                color: 'Aprikot',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg',
        },
        {   
            id: 24,
            type : 'Shirt',
            name: "Khaki Men's Short-Sleeve Crewneck T-shirt ",
            ratings: '3.5',
            no_of_ratings: '3.3k+',
            quantity_sold: '1.9k+',
            price: '$60.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Uityhn',
                color: 'Yellow',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg'
        },
        {   
            id: 25,
            type : 'Shirt',
            name: "Mineral Men's Short-Sleeve Crewneck T-shirt ",
            ratings: '4.0',
            no_of_ratings: '2.3k+',
            quantity_sold: '2.9k+',
            price: '$40.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Goka',
                color: 'Gold yellow',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg'
        },
        {   
            id: 26,
            type : 'Shirt',
            name: "Regular Men's Short-Sleeve Crewneck T-shirt ",
            ratings: '4.5',
            no_of_ratings: '2.3k+',
            quantity_sold: '2.9k+',
            price: '$50.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Hutop',
                color: 'Burgundy',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg'
        },
        {   
            id: 27,
            type : 'Shirt',
            name: "Essentials Men's Single-Sleeve T-shirt ",
            ratings: '4.9',
            no_of_ratings: '2.3k+',
            quantity_sold: '2.9k+',
            price: '$40.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Hutie',
                color: 'Brown',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg'
        },
        {   
            id: 28,
            type : 'Shirt',
            name: "Essentials Men's Regular-Sleeve Oxford T-shirt ",
            ratings: '3.9',
            no_of_ratings: '2.3k+',
            quantity_sold: '2.9k+',
            price: '$62.00',
            vendor: 'tobjaku.id',
            about: {
                brand: 'Goka',
                color: 'Aprikot',
                category: 'Casual',
                description: [
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                    'Lorem pfkf fdjkj sjfkjfs jsfkfj sjfks ksfjksfd',
                ],
                delivery: 'hfhhfsksfksfd f fjfksfj',
                shipping: 'hfslfs jfskf ssf',
                weight: '24kg'
            },
            imgPath: ImagePath,
            url: 'blackshirt.jpg'
        },
    ])
    const allItems = computed(()=> items.value)
    const getItemById = function(itemId: number){
        console.log(itemId)
        return items.value.find((item)=> {
            return item.id === itemId
        })
    }
  return { items, allItems, getItemById }
})
