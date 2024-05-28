import { StaticImageData } from 'next/image';

import normalType from '../../public/sprites/types/1.png';
import fightingType from '../../public/sprites/types/2.png';
import flyingType from '../../public/sprites/types/3.png';
import poisonType from '../../public/sprites/types/4.png';
import groundType from '../../public/sprites/types/5.png';
import rockType from '../../public/sprites/types/6.png';
import bugType from '../../public/sprites/types/7.png';
import ghostType from '../../public/sprites/types/8.png';
import steelType from '../../public/sprites/types/9.png';
import fireType from '../../public/sprites/types/10.png';
import waterType from '../../public/sprites/types/11.png';
import grassType from '../../public/sprites/types/12.png';
import electricType from '../../public/sprites/types/13.png';
import psychicType from '../../public/sprites/types/14.png';
import iceType from '../../public/sprites/types/15.png';
import dragonType from '../../public/sprites/types/16.png';
import darkType from '../../public/sprites/types/17.png';
import fairyType from '../../public/sprites/types/18.png';
import stellarType from '../../public/sprites/types/19.png';

const pokeTypes: { [key: string]: StaticImageData } = {
    normal: normalType,
    fighting: fightingType,
    flying: flyingType,
    poison: poisonType,
    ground: groundType,
    rock: rockType,
    bug: bugType,
    ghost: ghostType,
    steel: steelType,
    fire: fireType,
    water: waterType,
    grass: grassType,
    electric: electricType,
    psychic: psychicType,
    ice: iceType,
    dragon: dragonType,
    dark: darkType,
    fairy: fairyType,
    stellar: stellarType,
};

export default pokeTypes;