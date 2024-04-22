export type Pet = {
	name: string;
	favouriteActivity: string;
	heroImage: {
		src: string;
		alt: string;
	};
};

export interface PetsRepo {
	getAll(): Promise<Pet[]>;
	get(slug: string): Promise<Pet | null>;
}
