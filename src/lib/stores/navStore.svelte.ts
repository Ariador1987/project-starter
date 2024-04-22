class Navigation {
	private _menuIsOpen = $state(false);

	constructor() {}

	set menuIsOpen(newValue: boolean) {
		this._menuIsOpen = newValue;
	}

	get menuIsOpen() {
		return this._menuIsOpen;
	}
}

export const navStore = new Navigation();
