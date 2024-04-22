import type { PetsRepo, Pet } from './PetsRepoInterface';
import SummerImage from './images/summer.webp?w=768,1536&enhanced';
import WinstonImage from './images/winston.webp?w=768,1536&enhanced';
import NumiImage from './images/numi.webp?w=768,1536&enhanced';
import HryushkaImage from './images/hryushka.webp?w=768,1536&enhanced';
import PennyImage from './images/penny.webp?w=768,1536&enhanced';
import TummyImage from './images/tummy.webp?w=768,1536&enhanced';

export class PetsInMemoryRepo implements PetsRepo {
	#pets: Pet[];

	constructor() {
		this.#pets = [
			{
				name: 'Summer',
				favouriteActivity: 'test',
				heroImage: {
					src: SummerImage,
					alt: 'Summer playfully running on a hardwood floor',
				},
			},
			{
				name: 'Winston',
				favouriteActivity: 'test',
				heroImage: {
					src: WinstonImage,
					alt: 'Winston playfully running on a hardwood floor',
				},
			},
			{
				name: 'Numi',
				favouriteActivity: 'test',
				heroImage: {
					src: NumiImage,
					alt: 'Numi pouncing on her favourite toy',
				},
			},
			{
				name: 'Hryushka',
				favouriteActivity: 'test',
				heroImage: {
					src: HryushkaImage,
					alt: 'Hryushka pouncing on her favourite toy',
				},
			},
			{
				name: 'Penny',
				favouriteActivity: 'test',
				heroImage: {
					src: PennyImage,
					alt: 'Penny pouncing on her favourite toy',
				},
			},
			{
				name: 'Tummy',
				favouriteActivity: 'test',
				heroImage: {
					src: TummyImage,
					alt: 'Tummy pouncing on her favourite toy',
				},
			},
		];
	}

	async getAll(): Promise<Pet[]> {
		return this.#pets;
	}

	async get(slug: string): Promise<Pet | null> {
		return (
			this.#pets.find((pet) => pet.name.toLowerCase() === slug) || null
		);
	}
}
