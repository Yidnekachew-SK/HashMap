const HahMap = function () {
	const loadFactor = 0.75;
	let capacity = 16;
	let size = 0;
	let bucketstorage = new Array(capacity);

	const hash = function (key) {
		let hashCode = 0;
		const primeNumber = 31;

		for (let i = 0; i < key.length; i++) {
			hashCode += primeNumber * hashCode + charCodeAt(i);
		}

		return hashCode % 16;
	}

	const set = function (key, value) {
		let index = hash(key);
		let bucket = bucketstorage[index];

		bucket.forEach((existingKey, existingValue) => {
			if (existingKey === key) {
				existingKey = key;
				return;
			}
		})

		bucket.push([key, value]);
		size++;

		if (size > (capacity * loadFactor)) {
			capacity *= 2;
			let oldBucketStorage = bucketstorage;
			bucketstorage = new Array(capacity);
			size = 0;

			oldBucketStorage.forEach(oldBucket => {
				oldBucket.forEach(([key, value]) => {
					set(key, value);
				})
			})
		}
	}

	const get = function (key) {
		let index = hash(key);
		let bucket = bucketstorage[index];

		bucket.forEach((existingKey, existingValue) => {
			if (existingKey === key) {
				return existingValue;
			}
		})

		return null;
	}

	const has = function (key) {
		let index = hash(key);
		let bucket = bucketstorage[index];

		bucket.forEach((existingKey, existingValue) => {
			if (existingKey === key) {
				return true;
			}
		})

		return false;
	}

	const remove = function (key) {
		let index = hash(key);
		let bucket = bucketstorage[index];

		bucket.forEach((existingKey, existingValue) =>{
			if (existingKey === key) {
				bucket.splice(index, 1);
				size--;

				return true;
			}

			return false;
		})
	}

	const length = function () {
		return size;
	}

	const clear = function () {
		bucketstorage = new Array(16);
		size = 0;
	}

	const keys = function () {
		let storedKeys = [];

		bucketstorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedKeys.push(key);
			})
		})

		return storedKeys;
	}

	const values = function () {
		let storedValues = [];

		bucketstorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedValues.push(value);
			})
		})

		return storedValues;
	}

	const entries = function () {
		let storedEntries = [];

		bucketstorage.forEach(bucket => {
			bucket.forEach(([key, value]) => {
				storedEntries.push([key, value]);
			})
		})

		return storedEntries;
	}

	return { set, get, has, remove, length, clear, keys, values, entries}
}

export { HashMap };