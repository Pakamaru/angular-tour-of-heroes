export interface Hero {
    id: number;
    name: string;
    description: string;
    damage: number;
    health: number;
    image?: string;
    level: number;
}

export const heroes = [
    { 
        id: 1, 
        name: "Warrior", 
        description: "A fearless warrior skilled in close combat.", 
        damage: 10, 
        health: 100, 
        image: "warrior.png", 
        level: 1 
    },

    { 
        id: 2, 
        name: "Mage", 
        description: "A powerful mage capable of casting devastating spells.", 
        damage: 20, 
        health: 80, 
        image: "mage.png", 
        level: 1 
    },

    { 
        id: 3, 
        name: "Rogue", 
        description: "A stealthy rogue specialized in quick strikes and evasion.", 
        damage: 15, 
        health: 90, 
        image: "rogue.png", 
        level: 1 
    },

    { 
        id: 4, 
        name: "Archer", 
        description: "A skilled archer with deadly accuracy from a distance.", 
        damage: 18, 
        health: 85, 
        image: "archer.png", 
        level: 1 
    },

    { 
        id: 5, 
        name: "Paladin", 
        description: "A holy knight dedicated to protecting the innocent.", 
        damage: 12, 
        health: 95, 
        image: "paladin.png", 
        level: 1 
    }
];