export interface Product{
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description: string;
    category: string;
}

export const products: Product[] = [
    {
        id: 'root-hoodie-01',
        name: 'Kernel Panic Hoodie',
        price: 89.99,
        imageUrl: "https://placehold.co/600x600/111111/FFFFFF?text=//:01",
        description: 'Comodidad y estilo compilados en una sola prenda. Hecha con 100% algodon premium.',
        category: 'Hoodies'
    },
    {
        id: 'root-tee-01',
        name: 'Null Pointer Tee',
        price: 39.99,
        imageUrl: "https://placehold.co/600x600/111111/FFFFFF?text=//:02",
        description: 'Una camiseta que entiende tus errores mas comunes. Minimalista y directa.',
        category: 'T-Shirts'
    },
    {
        id: 'root-beanie-01',
        name: 'UTF-8 Beanie',
        price: 29.99,
        imageUrl: "https://placehold.co/600x600/111111/FFFFFF?text=//:03",
        description: 'Para que tus ideas se mantengan calidas y bien codificadas. Talla unica.',
        category: 'Accesorios'
    },{
        id: 'root-cap-01',
        name: 'sudo Cap',
        price: 34.99,
        imageUrl: "https://placehold.co/600x600/111111/FFFFFF?text=//:04",
        description: 'Otorga privilegios de administrados a tu estilo. Gorra ajustable de 6 paneles.',
        category: "Accesorios"
    }
]