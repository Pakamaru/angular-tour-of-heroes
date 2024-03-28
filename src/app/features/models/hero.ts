import { Ability, abilities } from "./ability";

export interface Hero {
    id: number;
    name: string;
    description: string;
    damage: number;
    health: number;
    image?: string;
    level: number;
    abilities: { ability: Ability, unlockLevel: number }[];
}

export const heroes = [
    { 
        id: 1, 
        name: "Warrior", 
        description: "A fearless warrior skilled in close combat.", 
        damage: 10, 
        health: 100, 
        image: "../../assets/images/warrior.png", 
        level: 1,
        abilities: [
            { ability: abilities.swordSlash, unlockLevel: 1 }
        ]
    },

    { 
        id: 2, 
        name: "Mage", 
        description: "A powerful mage capable of casting devastating spells.", 
        damage: 20, 
        health: 80, 
        image: "../../assets/images/mage.png", 
        level: 1,
        abilities: [
            { ability: abilities.swordSlash, unlockLevel: 1 }
        ]
    },

    { 
        id: 3, 
        name: "Rogue", 
        description: "A stealthy rogue specialized in quick strikes and evasion.", 
        damage: 15, 
        health: 90, 
        image: "../../assets/images/rogue.png", 
        level: 1,
        abilities: [
            { ability: abilities.swordSlash, unlockLevel: 1 }
        ]
    },

    { 
        id: 4, 
        name: "Archer", 
        description: "A skilled archer with deadly accuracy from a distance.", 
        damage: 18, 
        health: 85, 
        image: "../../assets/images/archer.png", 
        level: 1,
        abilities: [
            { ability: abilities.swordSlash, unlockLevel: 1 }
        ]
    }
];